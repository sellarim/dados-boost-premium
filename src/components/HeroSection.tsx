
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center border-b border-muted">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl text-center" style={{ color: "#0A66C2" }}>
        O grupo premium de dados com +58 mil seguidores que entrega resultados reais.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl text-center text-muted-foreground">
        Receba vagas exclusivas, dicas práticas e oportunidades reais antes de todo mundo. Vem acelerar sua carreira na área de dados.
      </p>
      <Button
        size="lg"
        className="px-8 py-5 text-lg font-semibold rounded-lg shadow-md transition hover:scale-105"
        style={{ backgroundColor: "#0A66C2", color: "#fff" }}
      >
        Entrar agora no grupo premium
      </Button>
    </section>
  );
}
