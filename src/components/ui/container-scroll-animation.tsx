"use client";

import React, { useRef, useMemo } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
export const ContainerScroll = ({
  titleComponent,
  children,
  className
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef
  });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    let rafId: number;
    const checkMobile = () => {
      rafId = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, {
      passive: true
    });
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  const scaleDimensions = useMemo(() => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  }, [isMobile]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return <div className="h-[50rem] md:h-[80rem] flex items-center justify-center relative px-4 md:px-20 py-2 md:py-10 will-change-transform" ref={containerRef} style={{
    containIntrinsicSize: "auto",
    contain: "layout style"
  }}>
      <div style={{
      perspective: "1000px"
    }} className="py-6 md:py-8 w-full relative md:py-[120px] pt-0 pb-[60px] my-[66px] mb-0 mt-[75px]">
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>;
};
export const Header = ({
  translate,
  titleComponent
}: any) => {
  return <motion.div style={{
    translateY: translate
  }} className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>;
};
export const Card = ({
  rotate,
  scale,
  children
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return <motion.div style={{
    rotateX: rotate,
    scale,
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3), 0 20px 60px rgba(0, 0, 0, 0.2)"
  }} className="max-w-5xl mx-auto h-[20rem] md:h-[30rem] w-full border-2 border-[#6C6C6C]/50 p-2 md:p-6 bg-[#222222] rounded-[20px] md:rounded-[30px] my-[60px] md:my-[100px] pb-[3px] pr-[3px] pt-[7px] pl-[7px] mb-[120px] md:mb-[240px] mt-0 px-[3px] py-[4px]">
      <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 dark:bg-zinc-900 md:p-4 py-[10px] md:py-[13px] px-[12px] md:px-[18px]">
        {children}
      </div>
    </motion.div>;
};