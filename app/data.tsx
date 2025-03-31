import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { LuArrowUpRight, LuExternalLink, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu"

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  image?: React.ReactNode
}

type ResearchProject = {
  name: string
  description: string
  link: string
  id: string
  image?: React.ReactNode
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  icon?: any
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Card = ({
  title,
  icon,
  link = "",
  children,
}: {
  title: string;
  icon: React.ReactNode;
  link?: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border dark:border-0 rounded-3xl group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[14rem]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="group flex items-center hover:text-zinc-200 dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            <span className="relative inline-block">
              {title}
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-100 transition-all duration-200 group-hover:max-w-full"></span>
            </span>
            <LuArrowUpRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        ) : (
          <p className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const PROJECTS: Project[] = [
  {
    name: 'Aidansforms',
    description:
      "Powering your forms, even when the connection can't!",
    link: 'https://www.aidansform.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    image: <Card title="Aidansforms" link="https://www.aidansform.com/" icon={<Image src="/aidansforms-icon-transparent.png" alt="Aidansforms" width={80} height={80} className="dark:invert" />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 rounded-2xl" />
          </Card>
  },
  {
    name: 'Project Mama',
    description: 'A chatbot specialized in postpartum hemorrhage care.',
    link: 'https://www.projectmama.ai/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    image:  <Card title="Project Mama" link="https://www.projectmama.ai" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
  },
]

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    name: 'Viability of Applying Large Language Models to Indoor Climate Sensor and Health Data for Scientific Discovery',
    description: `Developed software to manage large collection of indor climate sensors and designed the AI algorithm to analyze the large datasets.`,
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research4',
  },
  {
    name: 'Design and Feasibility of a Community Motorcycle Ambulance System in the Philippines',
    description: `Helped investigate the potential for motorcycle ambulance (motorlance) deployment in Metro Manila and Iloilo City to improve emergency medical care in high-traffic`,
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research3',
  },
  {
    name: 'A Building Blocks Approach to Implementing a Telehealth Clinic Model to Improve Primary Care Access in the Philippines: A Large-scale Pilot Project',
    description: 'Assisted in the design and implementation of a free telehealth clinic in the Philippines.',
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research2',
  },
  {
    name: 'Viability of Mobile Forms for Population Health Surveys in Low Resource Areas',
    description: 'Created the online/offline mobile form software (Aidansforms) from scratch to collect data in low resource areas.',
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research1',
  },
] 

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aidansforms',
    title: 'Founder & CEO',
    start: '2022',
    end: 'Present',
    link: 'https://www.aidansform.com',
    id: 'work1',
  },
  {
    company: 'VSee',
    title: 'Development Intern',
    start: '2023',
    end: 'Present',
    link: 'https://www.vsee.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Full-stack Developer',
    start: '2021',
    end: '2024',
    link: 'https://aidanchen.vercel.app',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I started my own company as a high school student',
    description:
      'A deep dive into my decision to start my own company, Aidansforms',
    link: '/blog/why-i-started-my-own-company-as-a-high-school-student',
    uid: 'blog-2',
  },
  {
    title: 'Building Scalable Form Software: Lessons from Developing Aidansforms',
    description: 
      'Challenges and solutions in creating a scalable, user-friendly form builder',
    link: '/blog/building-scalable-form-software-lessons-from-developing-aidansforms',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/aimeeaidanu',
    icon: <LuGithub className="w-5 h-5 md:w-3.5 md:h-3.5" />
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/aimeeaidanu',
    icon: <LuTwitter className="w-5 h-5 md:w-3.5 md:h-3.5" />
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aidan-chen',
    icon: <LuLinkedin className="w-5 h-5 md:w-3.5 md:h-3.5" />
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/aimeeaidanu',
    icon: <LuInstagram className="w-5 h-5 md:w-3.5 md:h-3.5" />
  },
]

export const EMAIL = 'aidan@aidansform.com'