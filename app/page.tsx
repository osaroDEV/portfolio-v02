import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { MotionSection } from "@/components/MotionSection"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MotionSection>
        <Hero />
      </MotionSection>
      <MotionSection delay={0.1}>
        <About />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Skills />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Projects />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Experience />
      </MotionSection>
      <MotionSection delay={0.1}>
        <Contact />
      </MotionSection>
    </main>
  )
}
