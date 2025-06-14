
import { Button } from "@/components/ui/button";

const vantagens = [
  "Acesso às melhores vagas de dados no WhatsApp",
  "Conteúdos e dicas exclusivas para acelerar sua carreira",
  "Comunidade engajada para networking e troca de experiências",
  "Bônus e novidades antes de todo mundo",
];

export default function WhoIsForSection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted flex justify-center">
      <div className="w-full max-w-md bg-gray-50 border shadow-lg rounded-2xl flex flex-col items-center p-8 relative">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground text-center">
          Não perca essa chance de&nbsp;
          <span className="text-[#0A66C2]">acelerar sua carreira em dados!</span>
        </h2>
        <ul className="text-base md:text-lg mb-7 w-full flex flex-col gap-2 text-gray-700">
          {vantagens.map((vantagem) => (
            <li key={vantagem} className="flex items-start gap-2">
              <span className="text-[#0A66C2] text-lg font-bold">✔</span>
              <span>{vantagem}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center bg-white border border-[#0A66C2]/30 shadow rounded-xl mb-6 p-6 w-full">
          <span className="text-md text-gray-500 mb-1">De:</span>
          <span className="text-3xl md:text-4xl font-bold text-gray-400 line-through mb-1">R$49,90</span>
          <span className="mt-2 text-md text-gray-500">Por apenas</span>
          <span className="text-4xl md:text-5xl font-extrabold text-[#0A66C2] drop-shadow mb-1">R$19,90</span>
          <span className="text-sm font-semibold bg-[#0A66C2]/10 text-[#0A66C2] px-3 py-1 rounded mt-2 shadow">
            preço promocional
          </span>
        </div>
        <a
          href="https://pay.kiwify.com.br/i2ssPJu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            className="w-full py-5 text-lg font-bold rounded-lg shadow-md transition hover:scale-105"
            style={{ backgroundColor: "#0A66C2", color: "#fff" }}
          >
            Quero aproveitar essa promoção!
          </Button>
        </a>
      </div>
    </section>
  );
}
