import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead frontend development for web applications serving 100k+ users. Architected component libraries, optimized performance, and mentored junior developers on modern React patterns.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and improved user experience metrics by 40%. Collaborated closely with design teams to implement pixel-perfect interfaces and interactive animations.",
    technologies: ["React", "Vue.js", "SASS", "JavaScript", "Figma"],
  },
  {
    title: "Junior Frontend Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020",
    description:
      "Built and maintained company website and internal dashboards. Gained experience in modern frontend development practices, responsive design, and cross-browser compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey in frontend development, creating engaging user experiences across various
            industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground/80">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
