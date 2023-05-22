function Hero() {
  return (
    <div className='bg-[url("./assets/back-room.jpg")] min-h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-gray-500 bg-blend-multiply flex justify-center items-center'>
      <div className='text-center  text-neutral-200'>
        <p className=' font-lato font-light text-2xl uppercase'>Professional Window Cleaning</p>
        <h1 className='text-8xl font-prompt font-bold mt-2 mb-10'>Honesty, Integrity, and Service</h1>
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
