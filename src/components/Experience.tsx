import { Briefcase, Code2, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces'
    },
    {
      icon: Users,
      title: 'Backend Integration',
      description: 'Connecting frontend with robust backend systems'
    },
    {
      icon: Trophy,
      title: 'User-Friendly Solutions',
      description: 'Focusing on optimal user experience and accessibility'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Worked with different companies on various projects, contributing to both frontend 
              and backend development while focusing on delivering user-friendly solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-primary hidden sm:block"></div>
              
              {/* Main Experience Card */}
              <div className="relative sm:pl-20 animate-slide-in-left">
                <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden sm:block"></div>
                
                <div className="card-elegant p-4 sm:p-6 lg:p-8 mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="p-3 sm:p-4 bg-primary/10 rounded-2xl w-fit mx-auto sm:mx-0">
                      <Briefcase size={24} className="text-primary sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Web Developer</h3>
                      <p className="text-primary font-semibold mb-3">Various Companies</p>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                        Collaborated with diverse teams across multiple projects, gaining extensive experience 
                        in full-stack development. Contributed to both client-side and server-side solutions, 
                        ensuring seamless integration and optimal performance.
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Contributions:</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Developed responsive web applications with modern frameworks</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Implemented user-centered design principles for improved UX</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Collaborated on backend integration and API development</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={`card-elegant p-6 text-center animate-fade-in-delay-${index + 1}`}
              >
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;