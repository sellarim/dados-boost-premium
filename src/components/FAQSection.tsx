
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência?",
    answer: "Não! O grupo foi criado tanto para iniciantes quanto para quem já atua na área. O que importa é estar buscando oportunidades de verdade.",
  },
  {
    question: "Garante emprego?",
    answer: "Não garantimos emprego, mas garantimos acesso às melhores oportunidades — antes de todo mundo. É você quem decide o quanto quer aproveitar isso.",
  },
  {
    question: "Qual o valor?",
    answer: "Custa R$19,90 por mês nessa promoção.",
  },
  {
    question: "Como as vagas são escolhidas?",
    answer: "Eu faço a curadoria pessoalmente, usando filtros estratégicos para encontrar vagas reais, de empresas sérias, com foco em quem quer entrar ou crescer na área de dados.",
  },
  {
    question: "Tem grupo gratuito também?",
    answer: "Por enquanto não. A parte gratuita é no meu perfil no Linkedin, lá as vagas aparecem 3 dias depois do que no grupo.",
  },
  {
    question: "Funciona mesmo?",
    answer: "Mais de 90 pessoas já estão no grupo e dezenas já foram chamadas para entrevistas. É real. Você só precisa entrar e participar.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-background py-14 px-4 border-b border-muted transition-colors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          Dúvidas frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem value={`faq-${idx}`} key={faq.question}>
              <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
