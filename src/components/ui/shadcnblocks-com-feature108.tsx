import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  videoUrl?: string;
}
interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}
interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  className?: string;
}
const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [{
    value: "tab-1",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Boost Revenue",
    content: {
      badge: "Modern Tactics",
      title: "Make your site a true standout.",
      description: "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
      buttonText: "See Plans",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      imageAlt: "placeholder"
    }
  }, {
    value: "tab-2",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Higher Engagement",
    content: {
      badge: "Expert Features",
      title: "Boost your site with top-tier design.",
      description: "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
      buttonText: "See Tools",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
      imageAlt: "placeholder"
    }
  }, {
    value: "tab-3",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Stunning Layouts",
    content: {
      badge: "Elite Solutions",
      title: "Build an advanced web experience.",
      description: "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
      buttonText: "See Options",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
      imageAlt: "placeholder"
    }
  }]
}: Feature108Props) => {
  return <section className="py-32">
      <div className="container mx-auto">
        
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-0 sm:flex-row sm:gap-0">
            {tabs.map(tab => <TabsTrigger key={tab.value} value={tab.value}>
                {tab.icon} {tab.label}
              </TabsTrigger>)}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl bg-muted/70 p-4 lg:p-6 border-0 rounded-xl">
            {tabs.map(tab => <TabsContent key={tab.value} value={tab.value} className="flex items-center justify-center m-0">
                <div className="w-full aspect-video rounded-xl bg-background/50 flex items-center justify-center overflow-hidden">
                  {tab.content.videoUrl ? (
                    tab.content.videoUrl.includes('embed') || tab.content.videoUrl.includes('youtube') || tab.content.videoUrl.includes('vimeo') || tab.content.videoUrl.includes('pandavideo') ? (
                      <iframe src={tab.content.videoUrl} className="w-full h-full rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    ) : (
                      <video src={tab.content.videoUrl} className="w-full h-full rounded-xl object-cover" autoPlay muted loop playsInline />
                    )
                  ) : <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground font-medium">Adicione um vídeo aqui</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">URL do vídeo: videoUrl</p>
                    </div>}
                </div>
              </TabsContent>)}
          </div>
        </Tabs>
      </div>
    </section>;
};
export { Feature108 };