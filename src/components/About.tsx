
import { useEffect, useState } from "react";
import { Code, Database, Layout, Server, Users, Zap } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
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

  const skills = [
    "C#", "ASP.NET Core", "Entity Framework", "SQL Server", 
    "Azure", "React", "TypeScript", "RESTful APIs", "Microservices",
    "Docker", "CI/CD", "Clean Architecture", "TDD", "SOLID Principles"
  ];

  return (
    <section id="about" className={`section-padding py-24 ${theme === 'dark' ? 'bg-background' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block py-1 px-3 mb-2 rounded-full ${
              theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-primary'
            } text-sm font-medium`}>
              About Me
            </span>
            <h2 className={`section-title transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Expertise & Background
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              A passionate .NET developer with a focus on creating efficient, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className={`transition-all duration-700 delay-200 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in .NET development, I've worked on a diverse range of projects from enterprise-level applications to innovative startups. I'm passionate about clean code, performance optimization, and creating intuitive user experiences.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a strong understanding of business needs, allowing me to deliver solutions that not only work flawlessly but also provide real value to users and stakeholders.
              </p>
            </div>
            
            <div className={`transition-all duration-700 delay-300 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-pill"
                    style={{ 
                      transitionDelay: `${100 + (index * 50)}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { 
                icon: <Code className="h-10 w-10 text-primary mb-4" />, 
                title: "Backend Development", 
                description: "Building robust server-side applications with .NET Core, Web API, and modern design patterns." 
              },
              { 
                icon: <Database className="h-10 w-10 text-primary mb-4" />, 
                title: "Database Design", 
                description: "Creating efficient database schemas and implementing ORM solutions with Entity Framework." 
              },
              { 
                icon: <Layout className="h-10 w-10 text-primary mb-4" />, 
                title: "Frontend Integration", 
                description: "Connecting .NET backends with modern frontend frameworks like React and Angular." 
              },
              { 
                icon: <Server className="h-10 w-10 text-primary mb-4" />, 
                title: "Cloud Services", 
                description: "Deploying and managing applications on Azure with a focus on scalability and performance." 
              },
              { 
                icon: <Zap className="h-10 w-10 text-primary mb-4" />, 
                title: "Performance Optimization", 
                description: "Identifying and resolving bottlenecks to ensure applications run efficiently." 
              },
              { 
                icon: <Users className="h-10 w-10 text-primary mb-4" />, 
                title: "Team Collaboration", 
                description: "Working effectively in agile environments with a focus on knowledge sharing." 
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`glass rounded-xl p-6 card-hover transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${400 + (index * 100)}ms` }}
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
