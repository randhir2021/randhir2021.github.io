import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, Container, Code, Settings, Shield, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Multi-cloud expertise",
    skills: [
      { name: "AWS", level: 95, color: "from-warning-orange to-warning-orange/70" },
      { name: "Azure", level: 75, color: "from-neon-blue to-neon-blue/70" },
      { name: "GCP", level: 70, color: "from-primary to-primary/70" }
    ]
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Container orchestration mastery",
    skills: [
      { name: "Kubernetes", level: 90, color: "from-neon-blue to-neon-blue/70" },
      { name: "Docker", level: 95, color: "from-secondary to-secondary/70" },
      { name: "EKS", level: 85, color: "from-primary to-primary/70" },
      { name: "Helm", level: 80, color: "from-accent to-accent/70" }
    ]
  },
  {
    icon: Code,
    title: "Infrastructure as Code",
    description: "Automation and provisioning",
    skills: [
      { name: "Terraform", level: 95, color: "from-neon-purple to-neon-purple/70" },
      { name: "CloudFormation", level: 85, color: "from-warning-orange to-warning-orange/70" },
      { name: "Ansible", level: 80, color: "from-destructive to-destructive/70" },
      { name: "Pulumi", level: 65, color: "from-secondary to-secondary/70" }
    ]
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    description: "Continuous delivery expertise",
    skills: [
      { name: "GitLab CI", level: 90, color: "from-warning-orange to-warning-orange/70" },
      { name: "GitHub Actions", level: 85, color: "from-foreground to-muted-foreground" },
      { name: "TeamCity", level: 80, color: "from-neon-blue to-neon-blue/70" },
      { name: "Jenkins", level: 75, color: "from-primary to-primary/70" }
    ]
  },
  {
    icon: Code,
    title: "Programming",
    description: "Scripting and automation",
    skills: [
      { name: "Python", level: 90, color: "from-primary to-primary/70" },
      { name: "Bash", level: 85, color: "from-terminal-green to-terminal-green/70" },
      { name: "Go", level: 70, color: "from-neon-blue to-neon-blue/70" },
      { name: "YAML", level: 95, color: "from-secondary to-secondary/70" }
    ]
  },
  {
    icon: Shield,
    title: "Security & Monitoring",
    description: "Cloud security and observability",
    skills: [
      { name: "AWS Security", level: 85, color: "from-destructive to-destructive/70" },
      { name: "Prometheus", level: 80, color: "from-warning-orange to-warning-orange/70" },
      { name: "Grafana", level: 75, color: "from-accent to-accent/70" },
      { name: "ELK Stack", level: 70, color: "from-primary to-primary/70" }
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    date: "2020-06",
    level: "Professional"
  },
  {
    name: "AWS Certified Security Specialty",
    date: "2021-06",
    level: "Specialty"
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    date: "2018-09",
    level: "Associate"
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    date: "2019-04",
    level: "Associate"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            &lt;skills /&gt;
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Technical arsenal for cloud-native solutions
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-mono">{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-secondary">
            &lt;certifications /&gt;
          </h3>
          <p className="text-muted-foreground font-mono">AWS Cloud expertise validation</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card/30 border-secondary/50 hover:border-secondary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {cert.level}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm mb-2 leading-tight">{cert.name}</h4>
                <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;