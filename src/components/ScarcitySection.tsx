
import { Button } from "@/components/ui/button";

export default function ScarcitySection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">
          Vagas no grupo são limitadas
        </h2>
        <ul className="mb-7 text-lg w-full max-w-2xl flex flex-col gap-2">
          <li>✋ Mantemos a qualidade e o foco dos membros</li>
          <li>⏳ As inscrições podem ser fechadas a qualquer momento</li>
        </ul>
        <Button
          size="lg"
          className="w-full md:w-auto px-8 py-5 text-lg font-semibold rounded-lg shadow-md transition hover:scale-105"
          style={{ backgroundColor: "#0A66C2", color: "#fff" }}
        >
          Quero entrar agora no grupo premium
        </Button>
      </div>
    </section>
  );
}

