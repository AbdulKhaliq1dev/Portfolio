import { ExternalLink, Github, Plus } from 'lucide-react';
import uiuxCaseStudy from '@/assets/uiux-case-study.jpg';
import fullstackApp from '@/assets/fullstack-app.jpg';

const Portfolio = () => {
  // Placeholder projects for future updates
  const placeholderProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience - Coming Soon.',
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      title: 'UI/UX Case Study',
      description: 'Comprehensive mobile app design system focusing on user-centered design principles - Coming Soon.',
      category: 'UI/UX Design',
      image: uiuxCaseStudy
    },
    {
      title: 'Full-Stack Application',
      description: 'Complete web application with modern dashboard, real-time features, and data visualization - Coming Soon.',
      category: 'Full-Stack',
      image: fullstackApp
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background scroll-mt-24">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my latest work and projects. More exciting projects coming soon!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <div 
                key={index}
                className={`card-elegant group animate-fade-in-delay-${index + 1}`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl mb-6">
                  {project.image === '/placeholder.svg' ? (
                    <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                      <Plus size={48} className="text-primary/60" />
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Github size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 pt-0">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-elegant p-8 max-w-2xl mx-auto">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4">
                <Plus size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-lg mb-6">
                I'm constantly working on new and exciting projects. 
                Check back soon to see my latest work and case studies.
              </p>
              <button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;