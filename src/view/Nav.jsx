import { TbWindow } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Nav() {
  const [lastScroll, setLastScroll] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [isDark, setIsDark] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > lastScroll && window.scrollY > 20) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
    setLastScroll(window.scrollY)
  }

  const handleNavTransition = () => {
    if (window.scrollY > 50) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    console.log(window.scrollY)
    console.log(isDark)
  }

  useEffect(
    () => {
      window.addEventListener('scroll', handleNavTransition)
      return () => {
        window.removeEventListener('scroll', handleNavTransition)
      }
    },
    // eslint-disable-next-line
    [isDark]
  )

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    // eslint-disable-next-line
    [lastScroll]
  )

  const navbarSlide = {
    initial: { y: 'calc(100% - 200 )' },
    enter: { y: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: 'calc(100% - 300px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  }

  const textMotion = {
    rest: {
      color: 'rgb(229, 229, 229)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    hover: {
      color: 'rgb(212, 212, 212)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const lineMotion = {
    rest: {
      width: '0%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    hover: {
      width: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.nav
      variants={navbarSlide}
      initial="initial"
      animate={isActive ? 'enter' : 'exit'}
      className={`${
        isDark ? 'bg-neutral-800 opacity-90 shadow-sm shadow-neutral-500' : 'bg-transparent '
      } flex justify-between items-center text-center px-10 py-5 text-neutral-200 fixed z-10 w-full transition-colors duration-500 `}
    >
      <a href="#hero" className="text-4xl hover:text-neutral-300">
        <TbWindow />
      </a>

      <div className="flex gap-5 md:gap-12 font-lato font-light text-xl justify-between items-center uppercase">
        <motion.a href="#services" className="flex flex-col justify-center items-center gap-0.5" whileHover="hover" initial="rest" animate="rest">
          <motion.span variants={textMotion}>services</motion.span>
          <motion.div variants={lineMotion} className="h-0.5 bg-sky-500"></motion.div>
        </motion.a>
        <motion.a href="#about" className="flex flex-col justify-center items-center gap-0.5" whileHover="hover" initial="rest" animate="rest">
          <motion.span variants={textMotion}>about</motion.span>
          <motion.div variants={lineMotion} className="h-0.5 bg-sky-500"></motion.div>
        </motion.a>
        <motion.a href="#contact" className="flex flex-col justify-center items-center gap-0.5" whileHover="hover" initial="rest" animate="rest">
          <motion.span variants={textMotion}>contact</motion.span>
          <motion.div variants={lineMotion} className="h-0.5 bg-sky-500"></motion.div>
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Nav
