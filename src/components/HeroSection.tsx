
import { UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-background py-16 px-4 flex flex-col items-center justify-center border-b border-muted transition-colors">
      <div className="flex flex-col items-center w-full">
        {/* Título + WhatsApp */}
        <div className="flex flex-row items-center justify-center mb-4 flex-wrap gap-2">
          <h1
            className="text-4xl md:text-5xl font-bold max-w-2xl text-center text-[color:var(--primary)] dark:text-primary"
          >
            Vagas fresquinhas em dados, todo dia, direto no seu WhatsApp.
          </h1>
        </div>
        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8 max-w-xl text-center text-muted-foreground">
          Receba vagas exclusivas, dicas práticas e oportunidades reais antes de todo mundo.
          <br />
          Vem acelerar sua carreira na área de dados.
        </p>
        {/* CTA */}
        <a
          href="https://pay.kiwify.com.br/i2ssPJu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-5 text-lg font-semibold rounded-lg shadow-md transition hover:scale-105 w-auto text-center animate-scale-in bg-[color:var(--primary)] text-white dark:bg-primary dark:text-background"
        >
          Entrar agora no grupo premium
        </a>
        {/* Prova social abaixo do CTA */}
        <div className="flex items-center gap-2 mt-4 bg-green-50 border border-green-200 rounded-xl px-5 py-3 shadow-sm animate-fade-in dark:bg-green-900/40 dark:border-green-400">
          <img
            src="/lovable-uploads/fce2c06c-846b-4c6b-9f33-6fd157d48419.png"
            alt="WhatsApp"
            className="w-7 h-7"
          />
          <span className="text-base md:text-lg font-medium text-green-800 dark:text-green-200">
            +90 membros ativos recebendo vagas diárias
          </span>
        </div>
      </div>
    </section>
  );
}
