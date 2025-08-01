import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/devops-hero.jpg";

const Hero = () => {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "randhir@devops-terminal:~$ whoami";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scan line effect */}
      <div className="scan-line"></div>
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Terminal window */}
        <div className="bg-card border border-primary rounded-lg p-6 mb-8 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-warning-orange"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground ml-2">terminal</span>
          </div>
          
          <div className="text-left font-mono">
            <div className="text-primary mb-2">
              {terminalText}<span className="terminal-cursor"></span>
            </div>
            <div className="text-muted-foreground">
              DevOps Engineer | Cloud Architect | 8+ years exp.
            </div>
            <div className="text-secondary mt-2">
              Location: Pune, India
            </div>
            <div className="text-accent mt-2">
              Specialization: AWS • Kubernetes • Terraform • CI/CD
            </div>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          RANDHIR KUMAR
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
          &gt; Architecting the cloud, one container at a time_
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="cyber" size="lg" className="group">
            <Terminal className="mr-2 group-hover:animate-pulse" />
            View Projects
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2" />
            Download Resume
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-secondary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Tech stack ticker */}
        <div className="mt-12 overflow-hidden">
          <div className="text-sm text-muted-foreground mb-2">TECH STACK</div>
          <div className="flex animate-marquee">
            <div className="flex gap-8 text-primary font-mono">
              <span>AWS</span>
              <span>•</span>
              <span>Kubernetes</span>
              <span>•</span>
              <span>Docker</span>
              <span>•</span>
              <span>Terraform</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>GitOps</span>
              <span>•</span>
              <span>EKS</span>
              <span>•</span>
              <span>CI/CD</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;