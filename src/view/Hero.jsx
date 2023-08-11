import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Hero.css'

const FADE_INTERVAL = 2000
const WORD_FADE_INTERVAL = FADE_INTERVAL * 2
const WORDS_LIST = ['Honesty', 'Integrity', 'Service']

function Hero() {
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' })
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL)
    return () => clearTimeout(timer)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordIndex(prevWordOrder => (prevWordOrder + 1) % WORDS_LIST.length)
    }, WORD_FADE_INTERVAL)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
    <div
      id="hero"
      className='bg-[url("./assets/back-room.jpg")] relative min-h-screen bg-no-repeat bg-cover bg-center md:bg-fixed bg-gray-500 bg-blend-multiply flex flex-col justify-center items-center'
    >
      <div className="custom-shape-divider-bottom-1691641198">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 className="md:text-7xl text-5xl text-center font-prompt font-bold mt-7 mb-16 tracking-tight md:mt-2 text-neutral-200 ">
        California Elite Windows LLC
      </h1>
      <div className="text-center pb-24 max-w-screen-xl text-neutral-200">
        <h2 className="md:text-4xl text-3xl lg:text-5xl font-prompt font-light mt-7 mb-5  md:mt-2 ">Professional Window Cleaning Services</h2>
        <h2 className={`${fadeProp.fade} md:text-4xl text-3xl lg:text-5xl font-lato uppercase font-light mb-12 md:mb-10`}>{WORDS_LIST[wordIndex]}</h2>
        <div className="flex justify-center gap-10">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto: dakota@calielitewindows.com"
            className="rounded-md overflow-hidden relative inline-flex group items-center justify-center px-5 py-3 m-1 cursor-pointer border-b-4 border-l-2 bg-gradient-to-br from-sky-500 to-sky-100 shadow-md shadow-sky-300 text-neutral-700"
          >
            <span className="relative uppercase">Get a Free quote</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:5303880160"
            className="rounded-md overflow-hidden relative inline-flex group items-center justify-center px-5 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-neutral-600 active:shadow-none shadow-lg bg-gradient-to-tr from-neutral-100 to-neutral-300 border-neutral-300 text-neutral-700"
          >
            <span className="relative uppercase">give us a call</span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Hero
