import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Frameworks",
    skills: ["React", "Next.js"],
  },
  {
    title: "Languages & Styling",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"],
  },
  {
    title: "Tools & Libraries",
    skills: ["Framer Motion", "React Query", "Zustand", "Vite", "Webpack", "ESLint"],
  },
  {
    title: "Design & Workflow",
    skills: ["Figma", "Git", "GitHub", "Vercel", "Netlify", "Responsive Design"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive frontend toolkit for building modern, responsive, and interactive user interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
