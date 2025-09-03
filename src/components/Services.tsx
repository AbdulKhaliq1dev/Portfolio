import { Code, Palette, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive, and scalable websites.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility',
        'Clean Code Architecture'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing user-friendly, aesthetic, and intuitive interfaces.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services designed to help your business grow and succeed in the digital world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`card-elegant p-8 group animate-slide-in-${index === 0 ? 'left' : 'right'}`}
              >
                {/* Service Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-elegant p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Let's work together to create something amazing that will help your business grow.
              </p>
              <button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;