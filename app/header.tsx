'use client'
import { Magnetic } from '@/components/ui/magnetic'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { SOCIAL_LINKS } from './data'
import React from 'react'
import { motion } from 'motion/react'
import { LuMail } from 'react-icons/lu'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <motion.main
        className="space-y-24 pt-4"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          <Link href="/" className="font-medium text-black dark:text-white">
            Aidan Chen
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Founder and CEO of Aidansforms. 
          </TextEffect>
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <div className="absolute flex items-center justify-start space-x-0 pt-1 left-[-10px]">
              <Magnetic springOptions={{ bounce: 0 }} intensity={0.25}>
                <Link
                  href={`mailto:aidan@aidansform.com`}
                  className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-none px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:bg-black dark:text-zinc-100"
                >              
                  <div className="flex items-center gap-1.5">
                    <LuMail className="w-4.5 h-4.5" />
                  </div>
                </Link>
              </Magnetic>
              {SOCIAL_LINKS.map((link) => (
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.25} key={link.link}>
                  <Link
                    href={link.link}
                    className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-none px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:bg-black dark:text-zinc-100"
                  >              
                    <div className="flex items-center gap-1.5">
                      {React.cloneElement(link.icon, { className: 'w-4.5 h-4.5' })}
                    </div>
                  </Link>
                </Magnetic>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.main>
    </header>
  )
}
