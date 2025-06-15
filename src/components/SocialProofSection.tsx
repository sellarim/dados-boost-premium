
import { UserCheck, ThumbsUp, Users, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: UserCheck,
    label: "+58 mil seguidores no LinkedIn",
  },
  {
    icon: ThumbsUp,
    label: "+1080 vagas compartilhadas",
  },
  {
    icon: Users,
    label: "+90 membros ativos no grupo",
  },
  {
    icon: MapPin,
    label: "Vagas com foco no Brasil e América Latina",
  },
  {
    icon: Star,
    label: "Curadoria feita por um analista com experiência no mercado",
  },
];

export default function SocialProofSection() {
  return (
    <section className="w-full py-10 bg-background border-b border-muted transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">
          Confiança de quem vive a área de dados
        </h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-4xl">
            {stats.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 bg-card rounded-lg shadow-sm py-6 px-6 border hover:scale-105 transition-all text-foreground"
              >
                <Icon size={32} strokeWidth={2.2} color="#0A66C2" />
                <span className="text-lg">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

