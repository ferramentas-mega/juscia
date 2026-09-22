import { Card } from "@/components/ui/card";
import { Sparkles, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Poupe tempo atendendo
                <span className="block text-primary mt-2">e foque em fechar mais propostas</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Mega IA revoluciona o atendimento jurídico ao assumir todo o processo de 
                interação com seus clientes de forma autônoma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa plataforma, alimentada por inteligência artificial, captura as informações 
                essenciais, resume os casos e notifica você diretamente no CRM para que possa dar 
                sequência ao atendimento de forma eficiente.
              </p>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-6 border-2 hover:border-primary transition-all bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Automação Inteligente</h3>
                    <p className="text-muted-foreground">
                      IA treinada especificamente para o contexto jurídico brasileiro, 
                      compreendendo as nuances de cada área do direito.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary transition-all bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Foco no que Importa</h3>
                    <p className="text-muted-foreground">
                      Elimine tarefas repetitivas e dedique seu tempo ao que realmente 
                      gera valor: analisar casos e fechar contratos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary transition-all bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Experiência Superior</h3>
                    <p className="text-muted-foreground">
                      Seus clientes recebem atenção imediata e personalizada, 
                      melhorando a satisfação e a taxa de conversão.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
