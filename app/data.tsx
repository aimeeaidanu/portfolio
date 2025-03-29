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

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    name: 'Viability of Applying Large Language Models to Indoor Climate Sensor and Health Data for Scientific Discovery',
    description: `We developed an indoor climate monitoring system deployed to homes in polluted areas of the Philippines. We collected participants' medical records including smoking history and methods of cooking, as well as measuring their heart and lung health via electrocardiogram and spirometer tests. We found that indoor temperatures can exceed published macroclimate temperatures by 9 degrees, indoor pollution is just as detrimental to health as secondhand smoke, CO2 levels in high-end hotels in the USA may be comparable to the low-income homes next to large trash landfills in Manila, and that the air quality on airplanes and trains is often borderline unhealthy. Additionally, we trained several large language models (LLMs) on our pollution and medical records data to explore the viability of using LLMs to accelerate scientific discoveries by analyzing patterns in largescale datasets. We then tested 3 AI systems-GPT4 (OpenAI), Gemini 1.5 Pro (Google), Claude 3 Opus (Anthropic)-and found that Anthropic's model has a slight edge over that of OpenAI and Google on our datasets, and that modern LLMs in general are just as good as human physicians and scientists in formulating research hypotheses and selecting subjects for experiments.`,
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research4',
  },
  {
    name: 'Design and Feasibility of a Community Motorcycle Ambulance System in the Philippines',
    description: `This study investigates the potential for motorcycle ambulance (motorlance) deployment in Metro Manila and Iloilo City to improve emergency medical care in high-traffic, underserved regions of the Philippines. VSee, a humanitarian technology company, has organized numerous free clinics in the Philippines and identified a critical need for improved emergency services. Motorlances offer a fast, affordable alternative to traditional ambulances, particularly in congested urban settings and remote rural locations. Pilot programs in Malawi, Thailand, and Iran have demonstrated significant improvements in response times and cost-efficiency with motorlance systems. This study presents a framework for motorlance operation and identifies three potential pilot locations: Mandaluyong, Smokey Mountain, and Iloilo City. Site visits, driver interviews, and user surveys indicate public trust in the motorlance concept and positive reception to potential motorlance deployment. Cost analysis verifies the financial feasibility of motorlance systems. Future work will focus on implementing a physical pilot in Mandaluyong, with the aim of expanding service to similar regions contingent on the Mandaluyong pilot's success.`,
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research3',
  },
  {
    name: 'A Building Blocks Approach to Implementing a Telehealth Clinic Model to Improve Primary Care Access in the Philippines: A Large-scale Pilot Project',
    description: 'A limited number of healthcare workers and cost constraints limit primary care access in the Philippines. To test telehealth as a low-cost and effective solution, a large-scale digital health clinic was implemented in the selected urban and rural communities. In collaboration with local authorities, our pilot telemedicine clinic was implemented for 3 days in January 2023. Patients were registered and their vitals were assessed before they were seen by a remote United States-based licensed physician who provided recommendations for treatment. Medical devices with real-time streaming capabilities, such as electronic stethoscopes, were utilized to enhance remote examinations. A total of 322 patients were treated at the telehealth clinic, of which 218 completed a population health survey. A large proportion of patients had a doctor visit more than 12 months prior (39.2%) and had not received a dental examination (86.3%) or an eye examination within the past year (84.4%). Most patients had access to a smartphone (69.7%). A lower proportion had access to an internet connection that was sufficient for video calls (57.9%) or a laptop (8.5%). Our clinic demonstrated that telehealth is a feasible solution to improve primary care access for disadvantaged communities in the Philippines.',
    link: 'https://doi.org/10.1109/ghtc56179.2023.10354577',
    id: 'research2',
  },
  {
    name: 'Viability of Mobile Forms for Population Health Surveys in Low Resource Areas',
    description: 'Population health surveys are an important tool to effectively allocate limited resources in low resource communities. In such an environment, surveys are often done by local population with pen and paper. Data thus collected is difficult to tabulate and analyze. We conducted a series of interviews and experiments in the Philippines to assess if mobile forms can be a viable and more efficient survey method. We first conducted pilot interviews and found 60% of the local surveyors actually preferred mobile forms over paper. We then built a software that can generate mobile forms that are easy to use, capable of working offline, and able to track key metrics such as time to complete questions. Our mobile form was field tested in three locations in the Philippines with 33 surveyors collecting health survey responses from 266 subjects. The percentage of surveyors preferring mobile forms increased to 76% after just using the form a few times. The results demonstrate our mobile form is a viable method to conduct large scale population health surveys in a low resource environment.',
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