
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-foreground'} text-white py-12`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <div className="text-2xl font-bold mb-2">
              <span>A</span>
              <span className="text-primary">K</span>
            </div>
            <p className="text-white/70 max-w-xs text-sm">
              Creating elegant solutions for complex problems with modern .NET technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:karkialson321@gmail.com" 
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-white/50 text-sm">
              © {currentYear} Dev.AK All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
