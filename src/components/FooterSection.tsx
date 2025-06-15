
export default function FooterSection() {
  return (
    <footer className="w-full bg-background py-8 px-4 text-foreground text-center transition-colors border-t border-muted">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="font-semibold text-lg">
          Criado por{" "}
          <a
            href="https://www.linkedin.com/in/leo-miralles/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
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
            className="underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
          >
            Conteúdo diário sobre carreira em dados no LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
