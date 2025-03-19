
import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
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
  
  const projects = [
    {
      title: "Enterprise CRM System",
      description: "A comprehensive customer relationship management system built with ASP.NET Core and React. Features include contact management, sales pipeline tracking, and detailed analytics.",
      tags: ["C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
      imageUrl: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Microservices",
      description: "A scalable e-commerce platform built with microservices architecture. Includes product catalog, shopping cart, order processing, and payment services.",
      tags: ["Microservices", ".NET 6", "Docker", "Kubernetes", "RabbitMQ"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Healthcare Management System",
      description: "A secure platform for managing patient records, appointments, and medical history. Built with ASP.NET Core and follows HIPAA compliance guidelines.",
      tags: ["C#", "ASP.NET Core", "MSSQL", "Entity Framework", "Identity Server"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`section-padding py-24 ${theme === 'dark' ? 'bg-secondary/30' : 'bg-secondary'}`}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block py-1 px-3 mb-2 rounded-full ${
              theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-primary'
            } text-sm font-medium`}>
              Projects
            </span>
            <h2 className={`section-title transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Recent Work
            </h2>
            <p className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              A selection of my recent projects showcasing my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`glass overflow-hidden rounded-xl transition-all duration-700 transform card-hover ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`${theme === 'dark' ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-primary'} text-xs px-2 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a href={project.githubUrl} className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a href={project.liveUrl} className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
