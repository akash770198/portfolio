import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: "CodeBox",
    description: "CodeBox is an interactive coding learning platform that gamifies programming education. Built with Next.js, it provides structured courses with chapters and hands-on exercises powered by an in-browser code editor. Users can enroll in courses, track their progress, earn XP and badges, maintain daily learning streaks, and level up their skills through a fun, game-inspired interface.",
    image: "/projects/codebox.png",
    tags: ["Next.js", "Typescript", "PostgreSQL", "SaaS", "Clerk", "Neon", "Shadcn", "TailwindCSS"],
    link: "https://codebox2-0-eight.vercel.app/",
    github: "https://github.com/akash770198/codebox2.0"
  },
  {
    title: "DocHive",
    description: "DocHive is a full-stack doctor appointment management system that enables patients to book appointments, doctors to manage availability, and admins to control users and schedules through secure role-based access. It also integrates online payments via Stripe and provides a responsive, user-friendly booking experience.",
    image: "/projects/DocHive.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Vite", "Tailwind CSS", "JWT", "Stripe", "Cloudinary", "Multer"],
    link: "https://doc-hive-frontend.vercel.app/",
    github: "https://github.com/akash770198/DocHive"
  },
  {
    title: "Sorting Visualiser",
    description: "Sorting Visualizer is an interactive web application that visually demonstrates how sorting algorithms work through step-by-step animations. Users can adjust array size, control animation speed, and explore different algorithms within a responsive and minimal interface designed for better algorithm understanding.",
    image: "/projects/sortingvis.png",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Data Structures"],
    link: "https://sorting-visualiser-teal.vercel.app/",
    github: "https://github.com/akash770198/Sorting-Visualiser"
  },
]

export function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* image */}
              <div className='relative overflow-hidden aspect-video'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300'>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <Github className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className='text-muted-foreground text-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <a href="https://github.com/akash770198" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className='w-5 h-5' />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}
