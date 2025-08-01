import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "T-Systems India",
    role: "Consultant (DevOps and Architect)",
    period: "2021 - Present",
    location: "India",
    description: "Leading cloud migration and DevOps transformation projects",
    projects: [
      {
        name: "Vitesco On-Prem to Cloud migration",
        tech: ["Terraform", "AWS EC2", "Lambda (Python)", "SnowBall", "RDS", "CI/CD", "CloudFormation", "Gitlab"],
        description: "Migrated 80TB PLM applications with 4 parallel environments in 5 months. Implemented fully automated end-to-end CI/CD pipeline."
      },
      {
        name: "Tmobile Netherlands Cloud Migrations",
        tech: ["AWS ECS", "Docker", "Terraform", "CodeBuild", "CodePipeline", "Code Deploy", "GitOps", "Route53"],
        description: "Migrated critical applications to ECS/EKS. Moved 70 domains with 2000+ records to cloud. AWS organization setup with baseline deployment."
      },
      {
        name: "FcKoeln Website Migration",
        tech: ["AWS ECS", "Docker", "Terraform", "Gitlab-CI", "Route53", "CloudFront", "WAF", "Glue", "Athena"],
        description: "Ongoing migration of multiple football club websites to AWS with enhanced security and performance."
      }
    ]
  },
  {
    company: "ZS Associates",
    role: "Sr Cloud Administrator",
    period: "2019 - 2021",
    location: "India",
    description: "Assisted DevOps team in designing cloud native frameworks",
    achievements: [
      "Onboarded dozens of applications on containers",
      "Created multiple customized CI/CD pipelines",
      "Developed Infra provisioning framework's Python SDK",
      "Maintained 200+ AWS accounts"
    ]
  },
  {
    company: "ZS Associates",
    role: "Cloud Administrator",
    period: "2017 - 2019",
    location: "India",
    description: "Supported internal teams with AWS journey",
    achievements: [
      "Handled incidents/requests for AWS tasks",
      "Supported team AWS migration initiatives",
      "Infrastructure automation and optimization"
    ]
  },
  {
    company: "Cybage Software",
    role: "Technical Support Engineer",
    period: "2016 - 2017",
    location: "India",
    description: "AWS Platform onboarding specialist",
    achievements: [
      "Onboarded multiple single tier web applications to AWS",
      "Platform optimization and support"
    ]
  },
  {
    company: "HCL Technologies",
    role: "Senior Analyst",
    period: "2013 - 2016",
    location: "India",
    description: "Linux Administrator for major automotive company",
    achievements: [
      "Linux system administration",
      "Infrastructure management and support"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            &lt;experience /&gt;
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Journey through the cloud infrastructure evolution
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary font-mono mb-2">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground mb-6">{exp.description}</p>
                
                {exp.projects && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-secondary mb-4">Key Projects:</h4>
                    {exp.projects.map((project, projIndex) => (
                      <div key={projIndex} className="border-l-2 border-accent pl-6">
                        <h5 className="font-semibold text-accent mb-2">{project.name}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {exp.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-4">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▶</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;