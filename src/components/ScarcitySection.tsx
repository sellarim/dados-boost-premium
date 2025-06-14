
import { Button } from "@/components/ui/button";

export default function ScarcitySection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">
          Vagas no grupo são limitadas
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-7 w-full max-w-2xl">
          <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg px-6 py-5 flex flex-row items-center gap-2 shadow-sm">
            <span className="text-2xl select-none">✋</span>
            <span className="text-lg">Mantemos a qualidade e o foco dos membros</span>
          </div>
          <div className="flex-1 bg-amber-50 border border-amber-200 rounded-lg px-6 py-5 flex flex-row items-center gap-2 shadow-sm">
            <span className="text-2xl select-none">⏳</span>
            <span className="text-lg">As inscrições podem ser fechadas a qualquer momento</span>
          </div>
        </div>
        <a
          href="https://pay.kiwify.com.br/i2ssPJu"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#0A66C2", color: "#fff" }}
          className="inline-block w-full md:w-auto px-8 py-5 text-lg font-semibold rounded-lg shadow-md transition hover:scale-105 text-center"
        >
          Quero entrar agora no grupo premium
        </a>
      </div>
    </section>
  );
}
