import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import videoThumbnail from "@/assets/video-thumbnail.svg";
const VideoSection = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }} viewport={{
        once: true
      }} className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">
              Demonstração
            </div>
          </div>

          <h2 className="sm:text-2xl md:text-3xl xl:text-5xl font-bold tracking-tighter text-primary lg:text-3xl text-3xl">
            Veja a Juscia em ação
          </h2>
          <p className="mt-5 opacity-75 text-muted-foreground">
            Veja na prática como a IA atende, qualifica e resume os casos no WhatsApp do seu
            escritório.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }} viewport={{
        once: true
      }} className="max-w-2xl mx-auto">
          <VideoPlayer thumbnailUrl={videoThumbnail} videoUrl="https://www.youtube.com/embed/sI3Pf1Amn0s?autoplay=1" title="Assistir demonstração" description="Veja como a Juscia funciona na prática" className="rounded-xl" />
        </motion.div>
      </div>
    </section>;
};
export default VideoSection;