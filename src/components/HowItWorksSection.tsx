
const steps = [
  {
    number: 1,
    title: "Entre no grupo premium",
    desc: "Cadastre-se e ganhe acesso ao grupo exclusivo.",
  },
  {
    number: 2,
    title: "Receba vagas e orientações diariamente",
    desc: "Fique sabendo de oportunidades e dicas em primeira mão.",
  },
  {
    number: 3,
    title: "Aplique, aprenda, conecte-se e cresça",
    desc: "Ponha em prática, troque experiências e acelere sua carreira.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 border-b border-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          Simples e direto, em 3 passos:
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:justify-center">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 bg-white p-6 rounded-lg shadow-md border flex flex-col items-center transition hover:shadow-lg hover:scale-105">
              <div className="flex items-center justify-center w-14 h-14 mb-3 rounded-full font-bold text-white text-2xl" style={{ background: "#0A66C2" }}>
                {step.number}
              </div>
              <div className="text-lg font-semibold mb-1 text-center">{step.title}</div>
              <div className="text-base text-muted-foreground text-center">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
