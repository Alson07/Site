
import { useEffect, useState } from "react";
import { ExternalLink, Mail, MapPin, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`section-padding py-24 ${theme === 'dark' ? 'bg-background' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block py-1 px-3 mb-2 rounded-full ${
              theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-primary'
            } text-sm font-medium`}>
              Contact
            </span>
            <h2 className={`section-title transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Get In Touch
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className={`${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'} rounded-full p-3`}>
                    <Mail className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-300' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@devdotnet.com" className="text-muted-foreground hover:text-primary transition-colors">
                      karkialson321@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className={`${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'} rounded-full p-3`}>
                    <MapPin className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-300' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Birtamode-Jhapa, Nepal</p>
                  </div>
                </div>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-xl p-6`}>
                <h4 className="font-bold mb-2">Looking for a .NET developer?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs expertise in .NET development, 
                  I'd love to discuss how I can help bring your ideas to life.
                </p>
                <a href="#" className={`inline-flex items-center ${theme === 'dark' ? 'text-blue-300' : 'text-primary'} font-medium hover:underline`}>
                  Download Resume <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className={`lg:col-span-3 transition-all duration-700 delay-300 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="glass rounded-xl p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="How can I help you?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full rounded-lg bg-primary text-white py-3 font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:translate-y-0.5 disabled:opacity-70 disabled:hover:shadow-none disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="flex items-center">
                            <div className="h-2 w-2 bg-white rounded-full loading-dot animate-pulse-subtle mr-1"></div>
                            <div className="h-2 w-2 bg-white rounded-full loading-dot animate-pulse-subtle mr-1"></div>
                            <div className="h-2 w-2 bg-white rounded-full loading-dot animate-pulse-subtle mr-1"></div>
                          </div>
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
