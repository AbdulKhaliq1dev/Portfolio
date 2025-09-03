import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Logo and Tagline */}
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-2">Abdul Khaliq</h3>
              <p className="text-muted-foreground">
                Web Developer & UI/UX Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/AbdulKhaliq1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 glow-effect"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/abdul_khaliq_224/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 glow-effect"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {['Home', 'About', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground flex items-center justify-center space-x-2">
                <span>© {currentYear} Abdul Khaliq.</span>
                
                <span>All Copyrights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;