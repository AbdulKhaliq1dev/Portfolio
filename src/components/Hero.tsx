import { Github, Linkedin, Instagram } from 'lucide-react';
import profileImage from '@/assets/abdul-khaliq-profile-new.jpg';

const Hero = () => {

  return (
    <section id="home" className="hero-gradient min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="section-padding pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Building intuitive interfaces for{' '}
                  <span className="text-gradient">seamless digital experiences</span>.
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
                    Hi! I'm Abdul Khaliq
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium">
                    Web Developer & UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
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

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('portfolio');
                    if (section) {
                      const headerOffset = 80;
                      const y = window.pageYOffset + section.getBoundingClientRect().top - headerOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      try { window.history.pushState(null, '', '#portfolio'); } catch {}
                    }
                  }}
                  className="btn-primary text-base sm:text-lg inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span>View My Work</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right order-first lg:order-last">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 via-background to-primary/20">
                  <img
                    src={profileImage}
                    alt="Abdul Khaliq - Web Developer & UI/UX Designer"
                    className="relative w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-primary/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;