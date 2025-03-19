import { ArrowDown, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "./ThemeProvider";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient - adjusted for dark/light mode */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        } animate-gradient-background`}></div>
      
      {/* Subtle grid overlay - adjusted for dark/light mode */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDMwYzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMEM3LjU2MSA2MCAwIDUyLjQzOSAwIDQzLjJjMC01LjYxOSA0LjQ1NS0xMy4yIDEyLjc5Mi0yMi43NDNDMTcuNzAyIDEyLjgxMyAyMy40NDMgNi44MzYgMzAgNi44MzZjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwZjE3MjkiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjAyZTQ1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDMwYzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMEM3LjU2MSA2MCAwIDUyLjQzOSAwIDQzLjJjMC01LjYxOSA0LjQ1NS0xMy4yIDEyLjc5Mi0yMi43NDNDMTcuNzAyIDEyLjgxMyAyMy40NDMgNi44MzYgMzAgNi44MzZjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjAyZTQ1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Extra Big Profile Image and Info */}
          <div 
            className={`mb-12 flex flex-col items-center transition-all duration-700 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Avatar className={`h-60 w-60 ${theme === 'dark' ? 'border-gray-800' : 'border-white'} border-4 shadow-xl mb-6`}>
              <AvatarImage src="/Website/Images/a.png" alt="Profile" />
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                <User className="h-20 w-20" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Alson karki</h2>
              <p className="text-xl text-muted-foreground">.NET Developer</p>
            </div>
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-all duration-700 delay-100 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Building <span className="text-primary">efficient</span> web applications
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm a passionate developer focused on .NET Core, C#, and modern web technologies. 
            Currently growing my skills in cloud architecture and microservices.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:translate-y-0.5"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/70 active:translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <ArrowDown className="h-5 w-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
