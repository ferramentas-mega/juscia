import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
const ImageSliderSection = () => {
  return <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Nossos Casos de Sucesso   
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Escritórios de advocacia que ganharam produtividade com a IA da Juscia
        </p>
      </div>
      <ImageAutoSlider />
    </section>;
};
export default ImageSliderSection;