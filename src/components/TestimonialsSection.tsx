
export default function TestimonialsSection() {
  return (
    <section className="w-full bg-background py-14 px-4 border-b border-muted transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          Quem entrou está um passo à frente
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-md p-5 bg-card border rounded-lg shadow-md h-full relative flex flex-col before:content-[''] before:absolute before:-left-5 before:top-4 before:w-2 before:h-8 before:bg-blue-200 before:rounded-r-lg dark:bg-blue-900/40 dark:before:bg-blue-500/40">
              <div className="text-muted-foreground text-sm mb-2 font-semibold">Bruno:</div>
              <blockquote className="text-lg mb-1 text-foreground">
                “Tava buscando reposicionamento de mercado, e graças ao teu grupo, estou na fase final de dois processos seletivos de vagas excelentes”
              </blockquote>
              <div className="text-xs text-right text-gray-400 mt-auto">via WhatsApp</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-md p-5 bg-card border rounded-lg shadow-md h-full relative flex flex-col before:content-[''] before:absolute before:-left-5 before:top-4 before:w-2 before:h-8 before:bg-green-200 before:rounded-r-lg dark:bg-green-900/40 dark:before:bg-green-500/40">
              <div className="text-muted-foreground text-sm mb-2 font-semibold">Nicolas:</div>
              <blockquote className="text-lg mb-1 text-foreground">
                “Sua comunidade de vagas tem me ajudado bastante a conseguir mais retornos e entrevistas na área de dados, algo que tava tendo bastante dificuldade antes, e acredito que grande parte disso seja por conseguir ser uma das primeiras pessoas a me candidatar nas vagas”
              </blockquote>
              <div className="text-xs text-right text-gray-400 mt-auto">via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
