import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Frontend Software Engineer",
    company: "Anora.dev.",
    location: "Seattle, Washington, USA",
    period: "Apr 2025 - Present",
    description:
      "Lead frontend development for web applications serving 10k+ users. Design, develop, and deploy scalable software solutions. Collaborate with cross-functional teams to define, design, and ship new features. Troubleshoot and maintain existing systems while optimizing performance.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "remote",
  },
  {
    title: "Frontend Technologies Trainer",
    company: "The Knowledge Academy",
    location: "London, England, UK",
    period: "Apr 2023 - Present",
    description:
      "A remote instructor's role involves delivering interactive training and personalized guidance through video conferencing or e-learning platforms. They design assessments to track student progress and assist with problem-solving using real-world examples. Additionally, they stay current on industry trends and collaborate with their team to improve training programs.",
    technologies: ["React", "CSS", "SASS", "JavaScript", "Figma"],
    type: "remote & part-time",
  },
  {
    title: "Lead Frontend Developer",
    company: "Foresight Tech Agency",
    location: "Lagos, Nigeria",
    period: "Mar 2023 - May 2025",
    description:
      "Led a team of 5 frontend developers in building a high-performance e-commerce platform, resulting in a 20% increase in conversion rate. Established and implemented a front-end code style guide and automated testing practices, reducing code review time by 30% and improving code maintainability. Mentored junior developers by providing technical guidance, code reviews, and training sessions, contributing to a 15% increase in team productivity.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    type: "remote",
  },
  {
    title: "Frontend Software Engineer",
    company: "Tech Experts",
    location: "Lagos, NG",
    period: "Apr 2020 - Feb 2023",
    description:
      "Developed and maintained responsive user interfaces for various web applications, ensuring optimal user experience across all devices (desktop, tablet, mobile). Collaborated with UI/UX designers to translate design mockups into functional and visually appealing web pages using HTML, CSS, and JavaScript. Implemented accessibility best practices (WCAG) to ensure web applications were inclusive for users with disabilities.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    type: "onsite",
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
                      <Badge variant="secondary">
                        {experience.type}
                      </Badge>
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
