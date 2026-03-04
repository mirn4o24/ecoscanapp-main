import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-primary-foreground/80">
      <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-primary-foreground font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
              <Leaf className="w-6 h-6 text-primary flex-shrink-0" />
              <span>Eco Scan</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60 max-w-xs mx-auto sm:mx-0">
              Иновативно приложение за разделно събиране на отпадъци, задвижвано от изкуствен интелект.
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-primary-foreground mb-3 sm:mb-4 text-base sm:text-lg">Навигация</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base">
              <li><a href="#problem" className="hover:text-primary transition-colors inline-block py-1">Проблемът</a></li>
              <li><a href="#solution" className="hover:text-primary transition-colors inline-block py-1">Решението</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors inline-block py-1">Как работи</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors inline-block py-1">Функции</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors inline-block py-1">Изтегли</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-primary-foreground mb-3 sm:mb-4 text-base sm:text-lg">За проекта</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base">
              <li><a href="#" className="hover:text-primary transition-colors inline-block py-1">За нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block py-1">Политика за поверителност</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block py-1">Условия за ползване</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-primary-foreground mb-3 sm:mb-4 text-base sm:text-lg">Контакти</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="break-all">mirotodorov24@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+359 88 216 5585</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Ямбол, България</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Eco Scan. Всички права запазени.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
