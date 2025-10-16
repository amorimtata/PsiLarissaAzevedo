import { Instagram, Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      {/* AQUI A MUDANÇA: Adicionado px-4 para espaçamento lateral */}
      <div className="container-custom px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Larissa Azevedo Pedraça
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Psicóloga - CRP 24/05599
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5569999682668" // Corrigi o número para o que está no texto
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="h-4 w-4" />
                (69) 99968-2668
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
                href="https://wa.me/5569999682668" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/psicologa.larissazevedo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/larissazevveddo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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