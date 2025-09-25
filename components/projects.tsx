import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Frontend",
    description:
      "A modern e-commerce frontend with advanced filtering, shopping cart, and checkout flow. Features smooth animations and responsive design.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Interface",
    description:
      "Interactive admin dashboard with data visualizations, real-time updates, and responsive design for project management.",
    image: "/task-management-interface.png",
    technologies: ["React", "Chart.js", "CSS Grid", "React Query"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A beautiful, animated portfolio website showcasing modern design principles and smooth user interactions.",
    image: "/ai-content-generator-interface.png",
    technologies: ["Vue.js", "Nuxt.js", "GSAP", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Lawfirm Website",
    description:
      "A professional website for a law firm, featuring service listings, and a contact form with validation.",
    image: "/michaelstevenssolicitors.png",
    technologies: ["Next", "Tailwind", "Zustand", "Sanity CMS", "CSS Animations"],
    liveUrl: "https://michaelstevenssolicitors.com",
    githubUrl: "https://github.com/osaroDEV/mss",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of my recent frontend work, demonstrating expertise in modern web technologies and user interface
            design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href={project.liveUrl} target='_blank' className="flex-1 bg-black text-white justify-center items-center flex rounded-sm py-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                  <Link href={project.githubUrl} target='_blank' className="flex-1 bg-transparent justify-center items-center flex rounded-sm border">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
