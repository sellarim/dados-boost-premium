import React from "react";

export default function VideoSection() {
  return (
    <section className="w-full bg-gray-100 py-10 border-b border-muted flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 mb-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
          Vagas fresquinhas em dados, todo dia, direto no seu WhatsApp.
        </h2>
        {/* Inline WhatsApp SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="WhatsApp"
        >
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M16.006 8.252c-4.242 0-7.69 3.286-7.69 7.334 0 1.446.446 2.841 1.299 4.032l-1.422 4.242 4.398-1.366a8.096 8.096 0 0 0 3.415.734h.003c4.241 0 7.687-3.286 7.687-7.334s-3.444-7.334-7.687-7.334zm3.995 11.086c-.168.474-.982.921-1.344.978-.34.054-.758.077-1.223-.078-.283-.087-.64-.21-1.105-.41-1.943-.81-3.215-2.693-3.313-2.823-.098-.13-.788-1.053-.788-2.008 0-.954.5-1.425.676-1.624.159-.181.419-.262.654-.178.233.082.522.186.594.366.072.181.245.594.267.636.022.042.036.09.007.146-.028.056-.042.09-.084.136-.04.045-.084.098-.12.136-.04.045-.082.095-.035.188.048.093.214.356.458.577.206.187.368.416.589.646.155.173.311.349.473.522.07.078.139.156.21.234.068.076.117.078.167.045.044-.03.189-.222.24-.298.05-.077.1-.063.171-.037.07.025.447.211.525.25.078.04.13.059.149.093.019.034.019.197-.037.388z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="w-full max-w-2xl aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
        {/* Espaço reservado para o YouTube */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <span className="text-sm mt-3 text-muted-foreground">
        Em breve: vídeo especial explicando tudo sobre o grupo premium!
      </span>
    </section>
  );
}
