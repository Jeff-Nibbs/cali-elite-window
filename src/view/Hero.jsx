function Hero() {
  return (
    <div
      id='hero'
      className='bg-[url("./assets/back-room.jpg")] min-h-screen bg-no-repeat bg-cover bg-center md:bg-fixed bg-gray-500 bg-blend-multiply flex justify-center items-center'
    >
      <div className='text-center max-w-screen-xl text-neutral-200'>
        <h1 className='md:text-7xl text-5xl lg:text-6xl font-prompt font-bold mt-7 mb-5  md:mt-2 '>California Elite Windows LLC </h1>
        <h2 className='md:text-3xl text-2xl lg:text-4xl font-lato uppercase font-light mb-12 md:mb-10'>Honesty, Integrity, and Service</h2>
        <div className='flex justify-center gap-10'>
          <a
            href='mailto: dakota@calielitewindows.com'
            className='rounded-md overflow-hidden relative inline-flex group items-center justify-center px-5 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-neutral-600 active:shadow-none shadow-lg bg-gradient-to-tr from-neutral-100 to-neutral-300 border-neutral-300 text-neutral-700'
          >
            <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-neutral-700 rounded-full group-hover:w-52 group-hover:h-40 opacity-10'></span>
            <span className='relative uppercase'>Get a Free quote</span>
          </a>

          <a
            href='tel:5303880160'
            className='rounded-md overflow-hidden relative inline-flex group items-center justify-center px-5 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-neutral-600 active:shadow-none shadow-lg bg-gradient-to-tr from-neutral-100 to-neutral-300 border-neutral-300 text-neutral-700'
          >
            <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-neutral-700 rounded-full group-hover:w-52 group-hover:h-40 opacity-10'></span>
            <span className='relative uppercase'>give us a call</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
