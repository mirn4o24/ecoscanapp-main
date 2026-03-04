import { Brain, MapPin, BarChart3, Shield, Flag, Leaf } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  { icon: Brain, title: "Изкуствен интелект", desc: "Разпознаване на отпадъци в реално време с напреднали AI модели." },
  { icon: MapPin, title: "GPS и карта", desc: "Интерактивна карта с всички налични контейнери наблизо." },
  { icon: BarChart3, title: "Класация", desc: "Състезавайте се с други потребители и издигнете се в класацията." },
  { icon: Shield, title: "Админ панел", desc: "Мониторинг и управление на контейнери и сигнали от администратори." },
  { icon: Flag, title: "Докладване", desc: "Бързо и лесно подаване на сигнали за проблеми с отпадъците." },
  { icon: Leaf, title: "Еко статистика", desc: "Следете вашето екологично въздействие с детайлна статистика." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">
              Функции
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 text-foreground">
              Основни функционалности
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
