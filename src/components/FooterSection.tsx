
export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0A66C2] py-8 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="font-semibold text-lg">
          <a
            href="https://www.linkedin.com/in/leo-miralles/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-200 transition-colors"
          >
            Leonardo Miralles
          </a>
        </div>
        <div className="text-base">Analista de BI com +6 anos de experiência</div>
        <div className="text-sm opacity-85">
          <a
            href="https://www.linkedin.com/in/leo-miralles/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-200 transition-colors"
          >
            Conteúdo diário sobre carreira em dados no LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
