import { GraduationCap, Code, Palette } from 'lucide-react';
import profileImage from '@/assets/abdul-khaliq-profile-new.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* About Info */}
          <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  About <span className="text-gradient">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am <span className="text-foreground font-semibold">Abdul Khaliq</span>, a web developer. 
                  I help businesses turn their online presence into a powerful growth tool. 
                  I create modern, flexible, and affordable web solutions tailored to your needs.
                </p>
                <p>
                  Every project is designed to deliver real results and lasting impact. 
                  My approach combines technical expertise with creative design thinking 
                  to build digital experiences that truly resonate with users.
                </p>
              </div>

              {/* Education Card */}
              <div className="card-elegant p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">B.S. in Computer Science</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-primary font-medium">SZABIST University</p>
                  <p className="text-sm text-muted-foreground">
                    Focused on software development, algorithms, and system design
                  </p>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card-elegant p-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-3">
                    <Code size={20} className="text-primary" />
                  </div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-muted-foreground mt-1">Modern & Scalable</p>
                </div>
                <div className="card-elegant p-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-3">
                    <Palette size={20} className="text-primary" />
                  </div>
                  <h4 className="font-semibold">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground mt-1">User-Centered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;