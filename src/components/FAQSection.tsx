
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência?",
    answer: "Não. O grupo é voltado tanto para iniciantes quanto para quem já atua.",
  },
  {
    question: "Garante emprego?",
    answer: "Não garantimos vagas fechadas. Garantimos acesso a oportunidades reais e orientação de quem está no mercado.",
  },
  {
    question: "Qual o valor?",
    answer:
      "O valor aparece no botão de pagamento. É acessível e sem mensalidade oculta.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 border-b border-muted">
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
