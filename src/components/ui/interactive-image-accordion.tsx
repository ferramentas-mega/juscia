import React, { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [{
  id: 1,
  title: 'Voice Assistant',
  imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop'
}, {
  id: 2,
  title: 'AI Image Generation',
  imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 3,
  title: 'AI Chatbot + Local RAG',
  imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop'
}, {
  id: 4,
  title: 'AI Agent',
  imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop'
}, {
  id: 5,
  title: 'Visual Understanding',
  imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop'
}];
interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter
}: AccordionItemProps) => {
  return <div className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `} onMouseEnter={onMouseEnter}>
      {/* Background Image */}
      <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" onError={(e) => {
      (e.target as HTMLImageElement).onerror = null;
      (e.target as HTMLImageElement).src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
    }} />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span className={`
          absolute text-white text-sm md:text-lg font-semibold
          transition-all duration-300 ease-in-out text-center
          ${isActive ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 max-w-[150px]' : 'w-auto bottom-24 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap'}
        `}>
        {item.title}
      </span>
    </div>;
};
interface LandingAccordionItemProps {
  items?: typeof accordionItems;
  title?: React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

// --- Main App Component ---
export function LandingAccordionItem({
  items = accordionItems,
  title = "Accelerate Gen-AI Tasks on Any Device",
  description = "Build high-performance AI apps on-device without the hassle of model compression or edge deployment.",
  ctaText = "Contact Us",
  ctaHref = "#contact"
}: LandingAccordionItemProps) {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };
  return <div className="bg-background font-sans">
      <section className="container mx-auto md:py-24 py-[41px] px-[89px]">
        <div className="flex flex-col items-center justify-between px-0 mx-0 gap-0 md:flex md:flex-row">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter text-primary md:text-5xl text-left">
              {title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 px-0 text-left pr-[122px] ml-px mr-[19px]">
              {description}
            </p>
            <div className="mt-8 flex items-center justify-start">
              <a href={ctaHref} className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300">
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-6 overflow-x-auto p-4 py-[24px] mx-0 px-[2px]">
              {items.map((item, index) => <AccordionItem key={item.id} item={item} isActive={index === activeIndex} onMouseEnter={() => handleItemHover(index)} />)}
            </div>
          </div>
        </div>
      </section>
    </div>;
}