
export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 border-b border-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          Quem entrou está um passo à frente
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-md p-5 bg-white border rounded-lg shadow-md relative before:content-[''] before:absolute before:-left-5 before:top-4 before:w-2 before:h-8 before:bg-blue-200 before:rounded-r-lg">
              <div className="text-muted-foreground text-sm mb-2">Mensagem enviada por membro:</div>
              <blockquote className="text-lg mb-1">
                “Entrei no grupo há 10 dias e já fui chamado pra 2 entrevistas!”
              </blockquote>
              <div className="text-xs text-right text-gray-400">via Telegram</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-md p-5 bg-white border rounded-lg shadow-md relative before:content-[''] before:absolute before:-left-5 before:top-4 before:w-2 before:h-8 before:bg-green-200 before:rounded-r-lg">
              <div className="text-muted-foreground text-sm mb-2">Mensagem enviada por membro:</div>
              <blockquote className="text-lg mb-1">
                “Achei uma vaga na Argentina que nem estava no LinkedIn. Obrigado!”
              </blockquote>
              <div className="text-xs text-right text-gray-400">via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
