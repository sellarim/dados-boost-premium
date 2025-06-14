
const benefits = [
  { emoji: "📬", text: "Vagas diárias e antecipadas" },
  { emoji: "🤝", text: "Networking com profissionais da área" },
  { emoji: "🧠", text: "Dicas práticas sobre currículo e LinkedIn" },
  { emoji: "🌎", text: "Oportunidades no Brasil e América Latina" },
  { emoji: "🔎", text: "Vagas de entrada e também para quem já atua" },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          O que você encontra no grupo premium
        </h2>
        <ul className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-10">
          {benefits.map(({ emoji, text }) => (
            <li key={text} className="flex items-center text-lg md:text-xl bg-gray-50 rounded-lg py-4 px-6 shadow-sm border transition hover:scale-105">
              <span className="text-2xl mr-4">{emoji}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
