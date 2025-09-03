import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_akfedbq',
        'template_2003d2b',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Abdul Khaliq',
        },
        'iVhkoPtG9fYdllo5K'
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulkhaliq117890@gmail.com',
      href: 'mailto:abdulkhaliq117890@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '03206764574',
      href: 'tel:+923206764574'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about possibilities, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="card-elegant p-6">
                <h4 className="font-bold text-lg mb-3">Ready to Start?</h4>
                <p className="text-muted-foreground mb-4">
                  Let's turn your ideas into reality. Send me a message and let's discuss your project.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle size={16} />
                  <span className="text-sm font-medium">Quick Response Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;