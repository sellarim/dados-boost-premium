
import React from "react";

const benefits = [
  { 
    emoji: "📬", 
    text: "Vagas diárias e antecipadas",
    back: "Seja o primeiro a se candidatar com vagas exclusivas no seu WhatsApp."
  },
  { 
    emoji: "🤝", 
    text: "Networking com profissionais da área",
    back: "Conecte-se, tire dúvidas e cresça junto de quem realmente entende do mercado."
  },
  { 
    emoji: "🧠", 
    text: "Dicas práticas sobre currículo e LinkedIn",
    back: "Aprenda a destacar seu perfil e alavanque suas chances de entrevista."
  },
  { 
    emoji: "🌎", 
    text: "Oportunidades no Brasil e América Latina",
    back: "Receba vagas nacionais e internacionais filtradas para o seu perfil."
  },
  { 
    emoji: "🔎", 
    text: "Vagas de entrada e também para quem já atua",
    back: "Encontre vagas para todos os níveis, do estágio ao especialista."
  },
  { 
    emoji: "🚀", 
    text: "Conteúdo exclusivo toda semana",
    back: "Lives, áudios e materiais focados no seu crescimento profissional."
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-14 px-4 border-b border-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-7 text-foreground">
          O que você encontra no grupo premium
        </h2>
        <ul
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-8 
            place-items-center
          "
        >
          {benefits.map(({ emoji, text, back }) => (
            <li 
              key={text}
              className="group [perspective:800px] w-full max-w-xs"
            >
              <div className="
                relative w-full h-36 
                transition-transform duration-500 
                [transform-style:preserve-3d] 
                group-hover:[transform:rotateY(180deg)]
              ">
                {/* Frente */}
                <div className="
                  absolute inset-0 flex flex-col items-center justify-center 
                  bg-gray-50 rounded-xl py-6 px-4 shadow-sm border
                  transition 
                  [backface-visibility:hidden]
                ">
                  <span className="text-3xl mb-3">{emoji}</span>
                  <span className="text-lg md:text-xl text-center">{text}</span>
                </div>
                {/* Verso */}
                <div className="
                  absolute inset-0 flex flex-col items-center justify-center 
                  bg-primary text-white rounded-xl py-6 px-4 shadow-sm border 
                  [backface-visibility:hidden] 
                  [transform:rotateY(180deg)]
                  text-center
                ">
                  <span className="text-md">{back}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* CSS extra para o efeito flip */}
      <style>{`
        @media (hover: hover) {
          .group:hover .group-hover\\:[transform\\:rotateY\\(180deg\\)\\] {
            transform: rotateY(180deg) !important;
          }
        }
      `}</style>
    </section>
  );
}
