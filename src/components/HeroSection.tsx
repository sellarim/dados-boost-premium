
import { UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center border-b border-muted">
      <div className="flex flex-col items-center w-full">
        {/* Título + WhatsApp */}
        <div className="flex flex-row items-center justify-center mb-4 flex-wrap gap-2">
          <h1
            className="text-4xl md:text-5xl font-bold max-w-2xl text-center"
            style={{ color: "#0A66C2" }}
          >
            Vagas fresquinhas em dados, todo dia, direto no seu WhatsApp.
          </h1>
          <img
            src="/lovable-uploads/fce2c06c-846b-4c6b-9f33-6fd157d48419.png"
            alt="Logo WhatsApp"
            className="ml-2 shrink-0 w-10 h-10"
          />
        </div>
        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8 max-w-xl text-center text-muted-foreground">
          Receba vagas exclusivas, dicas práticas e oportunidades reais antes de todo mundo. Vem acelerar sua carreira na área de dados.
        </p>

        {/* CTA */}
        <a
          href="https://pay.kiwify.com.br/i2ssPJu"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#0A66C2", color: "#fff" }}
          className="inline-block px-8 py-5 text-lg font-semibold rounded-lg shadow-md transition hover:scale-105 w-auto text-center animate-scale-in"
        >
          Entrar agora no grupo premium
        </a>

        {/* Prova social abaixo do CTA */}
        <div className="flex items-center gap-2 mt-4 bg-green-50 border border-green-200 rounded-xl px-5 py-3 shadow-sm animate-fade-in">
          <img
            src="/lovable-uploads/fce2c06c-846b-4c6b-9f33-6fd157d48419.png"
            alt="WhatsApp"
            className="w-7 h-7"
          />
          <span className="text-base md:text-lg font-medium text-green-800">
            +90 membros ativos recebendo vagas diárias
          </span>
        </div>
      </div>
    </section>
  );
}
