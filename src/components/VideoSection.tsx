
import React from "react";
import { Whatsapp } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="w-full bg-gray-100 py-10 border-b border-muted flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 mb-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
          Vagas fresquinhas em dados, todo dia, direto no seu WhatsApp.
        </h2>
        <Whatsapp size={32} color="#25D366" aria-label="WhatsApp" />
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
