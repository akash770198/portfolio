import React from 'react'
import { Button } from '@/components/Button'
import { ArrowRight, ChevronDown, Download, Github, Linkedin, SquareCode } from 'lucide-react'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton'

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Git",
  "GitHub Actions",
];

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img src='/hero-bg.jpg' alt='Hero image'
          className='w-full h-full object-cover opacity-40' />

        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: '#20B2A6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s 
            ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }} />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left column - Text Content*/}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Building <span className="text-primary glow-text">modern</span>
                <br />
                web applications
                <br />
                <span className="font-serif italic font-normal text-white">
                  with precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Akash, a full-stack developer passionate about building scalable
                web applications. I work with React, Next.js, Node.js, MySQL, and MongoDB
                to create fast, secure, and user-friendly digital experiences.
              </p>
            </div>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <a href="#contact"
                className="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-4 text-lg inline-flex items-center gap-2">
                Contact Me <ArrowRight className="w-5 h-5" />
              </a>
              <a href='/resume/Akash_Kumar_Behuria_Resume.pdf' download>
                <AnimatedBorderButton>
                  <Download className='w-5 h-5' />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {[{ icon: Github, href: 'https://github.com/akash770198' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/akash-kumar-797ab0294/' },
              { icon: SquareCode, href: 'https://leetcode.com/u/7701989367/' }
              ].map((social, idx) => (
                <a key={idx} href={social.href}
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
                >{<social.icon className='w-5 h-5' />}</a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile image */}
            <div className='relative max-w-md mx-auto'>
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="my-profile.jpeg" alt="Akash Kumar Behuria" className='w-full aspect-[4/5] object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>Fresher</div>
                  <div className='text-xs text-muted-foreground'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className='flex-shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors' >{skill}</span>
                </div>
              ))}</div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
