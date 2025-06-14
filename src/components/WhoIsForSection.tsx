
export default function WhoIsForSection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Card Preço Antigo */}
          <div className="bg-gray-100 border shadow-sm rounded-xl flex flex-col items-center p-7 w-full md:w-64">
            <span className="text-md text-gray-500 mb-2">De:</span>
            <span className="text-3xl md:text-4xl font-bold text-gray-400 line-through mb-1">R$49,90</span>
          </div>
          {/* Card Preço Novo */}
          <div className="bg-primary text-white border shadow-lg rounded-xl flex flex-col items-center p-7 w-full md:w-64 scale-105">
            <span className="text-md mb-2 opacity-80">Agora</span>
            <span className="text-4xl md:text-5xl font-bold mb-1 drop-shadow">R$19,90</span>
            <span className="text-sm font-semibold bg-white text-primary px-3 py-1 rounded mt-2 shadow-md">
              preço promocional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
