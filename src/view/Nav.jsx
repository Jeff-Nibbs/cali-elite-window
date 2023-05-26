import { TbWindow } from 'react-icons/tb'
import { motion } from 'framer-motion'

function Nav() {
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
    <div className='flex items-center px-10 py-3 text-neutral-200 fixed z-10 w-full bg-transparent'>
      <a href='#hero' className='mr-auto text-4xl hover:text-neutral-300'>
        <TbWindow />
      </a>
      <div className='flex gap-5 md:gap-24 font-lato font-light text-xl justify-between items-center uppercase'>
        <motion.a href='#services' className='flex flex-col justify-center items-center gap-0.5' whileHover='hover' initial='rest' animate='rest'>
          <motion.span variants={textMotion}>services</motion.span>
          <motion.div variants={lineMotion} className='h-0.5 bg-sky-500'></motion.div>
        </motion.a>
        <motion.a href='#about' className='flex flex-col justify-center items-center gap-0.5' whileHover='hover' initial='rest' animate='rest'>
          <motion.span variants={textMotion}>about</motion.span>
          <motion.div variants={lineMotion} className='h-0.5 bg-sky-500'></motion.div>
        </motion.a>
        <motion.a href='#contact' className='flex flex-col justify-center items-center gap-0.5' whileHover='hover' initial='rest' animate='rest'>
          <motion.span variants={textMotion}>contact</motion.span>
          <motion.div variants={lineMotion} className='h-0.5 bg-sky-500'></motion.div>
        </motion.a>
      </div>
    </div>
  )
}

export default Nav
