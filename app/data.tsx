import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Github } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu"

type Project = {
  name: string
  description: string
  link: string
  video: string
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

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
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
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
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
    image: <Card title="Aidansforms" icon={<Image src="/aidansforms-icon-transparent.png" alt="Aidansforms" width={80} height={80} />}>
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
            {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
          </Card>
  },
  {
    name: 'Project Mama',
    description: 'A chatbot specialized in postpartum hemorrhage care.',
    link: 'https://www.projectmama.ai/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    image:  <Card title="Project Mama" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
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
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/aimeeaidanu',
    icon: <LuGithub />
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/aimeeaidanu',
    icon: <LuTwitter />
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aidan-chen',
    icon: <LuLinkedin />
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/aimeeaidanu',
    icon: <LuInstagram />
  },
]

export const EMAIL = 'aidan@aidansform.com'