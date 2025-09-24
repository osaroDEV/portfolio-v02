import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate frontend developer with a love for creating beautiful, interactive user experiences that
            bring designs to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With extensive experience in frontend development, I specialize in building responsive, accessible web
              applications using modern technologies like React, Next.js, and TypeScript. I believe in writing
              clean, maintainable code and creating user interfaces that are both beautiful and functional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new frontend frameworks, contributing to open-source
              projects, or staying up-to-date with the latest design trends and web technologies.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold">Clean Code</h3>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and well-documented code that stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Palette className="h-6 w-6 text-pink-600 mr-3" />
                  <h3 className="text-lg font-semibold">Design-Focused</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating beautiful, intuitive interfaces that provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold">Performance</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and seamless user interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
