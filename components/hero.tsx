"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20 animate-gradient-x" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-purple-900/10 to-blue-900/10 animate-gradient-y" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
              Front-End Developer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Crafting exceptional digital experiences with modern technologies. Passionate about clean code, innovative
            solutions, and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="hover:text-purple-600">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-purple-600">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-purple-600">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
{/* 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div> */}
      </div>
    </section>
  )
}
