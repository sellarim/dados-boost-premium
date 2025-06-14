
const forWhom = [
  { emoji: "🎯", text: "Está migrando para a área de dados" },
  { emoji: "🚀", text: "Já atua na área e quer crescer mais rápido" },
  { emoji: "👶", text: "Está começando e quer se posicionar" },
  { emoji: "💼", text: "Quer ter vantagem sobre a concorrência" },
];

export default function WhoIsForSection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          Esse grupo é ideal para você se:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-lg">
          {forWhom.map(({ emoji, text }) => (
            <li key={text} className="flex items-center bg-gray-50 rounded-lg px-5 py-4 border shadow-sm">
              <span className="text-2xl mr-4">{emoji}</span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
