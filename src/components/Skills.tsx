import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: [
        { name: 'React & Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 82 },
        { name: 'User Research', level: 85 },
        { name: 'Prototyping', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 70 }
      ]
    }
  ];

  const coreStrengths = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices'
    },
    {
      icon: Globe,
      title: 'Modern Frameworks',
      description: 'Expertise in latest web technologies and development practices'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, efficient applications with optimal loading times'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining technical proficiency with creative design thinking to deliver 
              exceptional digital solutions.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`card-elegant p-8 animate-fade-in-delay-${categoryIndex + 1}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Strengths */}
          <div className="grid md:grid-cols-3 gap-8">
            {coreStrengths.map((strength, index) => (
              <div 
                key={index}
                className={`card-elegant p-6 text-center animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-4 bg-gradient-primary rounded-2xl w-fit mx-auto mb-4">
                  <strength.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;