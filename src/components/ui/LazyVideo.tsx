import { useEffect, useRef, useState } from "react";

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & { src: string };

/**
 * Defers loading (and therefore downloading) the video until it is close to
 * entering the viewport, instead of eagerly fetching every autoplay/loop
 * video on the page at once — the biggest chunk of this page's payload.
 */
export function LazyVideo({ src, className, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      preload="none"
      autoPlay={shouldLoad}
      className={className}
      {...rest}
    />
  );
}
