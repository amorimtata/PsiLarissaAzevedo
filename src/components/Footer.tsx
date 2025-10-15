import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Larissa Azevedo Pedraça
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Psicóloga - CRP XX/XXXXX
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
              <a 
                href="mailto:contato@larissaapedraca.com.br" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="h-4 w-4" />
                contato@larissaapedraca.com.br
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© {currentYear} Larissa Azevedo Pedraça. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
