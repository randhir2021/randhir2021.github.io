import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Terminal } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-background/50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            &lt;contact /&gt;
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Ready to architect your next cloud solution?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="bg-card/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl font-mono flex items-center gap-3">
                <Terminal className="h-6 w-6 text-primary" />
                Let's Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground font-mono">randhir2021@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground font-mono">+91-9971212424</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Pune, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card className="bg-card/50 border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)]">
            <CardHeader>
              <CardTitle className="text-2xl font-mono text-secondary">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Mail className="h-5 w-5" />
                Send Email
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Github className="h-5 w-5" />
                View GitHub
              </Button>
              
              <Button variant="outline" className="w-full justify-start gap-3 h-12">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </Button>
              
              <Button variant="cyber" className="w-full justify-start gap-3 h-12">
                <Terminal className="h-5 w-5" />
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Terminal-style footer */}
        <Card className="bg-card border-primary/50">
          <CardContent className="p-6">
            <div className="font-mono text-sm">
              <div className="text-primary mb-2">
                randhir@devops-master:~$ cat message.txt
              </div>
              <div className="text-muted-foreground pl-4 border-l-2 border-primary/30">
                "Passionate about building scalable, secure, and efficient cloud infrastructure.<br/>
                Always excited to discuss new technologies and solve complex problems.<br/>
                Let's transform your infrastructure together!"
              </div>
              <div className="text-primary mt-4">
                randhir@devops-master:~$ <span className="terminal-cursor"></span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;