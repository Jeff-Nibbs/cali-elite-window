import kidWashing from '../assets/kid-cleaning.jpg'

function About() {
  return (
    <div id='about' className='max-w-screen-xl mx-auto px-5 py-20 min-h-screen text-neutral-700 lg:text-xl text-sm md:text-lg font-lato font-light'>
      <h2 className='text-4xl text-neutral-800 md:text-6xl lg:text-7xl text-center font-prompt font-bold m-5'>
        Our Story: Bringing Clarity to Your Windows
      </h2>
      <div className='top md:flex gap-7 mx-auto'>
        <div className='flex md:flex-col justify-evenly mx-3 py-5 md:py-0 '>
          <h2 className='text-center md:text-left'>Unparalleled expertise in tackling even the toughest window cleaning challenges</h2>
          <h2 className='text-center md:text-left'>Focus on providing friendly and reliable customer service</h2>
        </div>
        <div className='md:w-11/12'>
          <img className='object-cover rounded-full' src={kidWashing} alt='kid washing windows' />
        </div>
        <div className='flex md:flex-col justify-evenly mx-3 py-5 md:py-auto'>
          <h2 className='text-center md:text-left'>Customizable service plans tailored to meet specific window cleaning needs</h2>
          <h2 className='text-center md:text-left'>Attention to detail to ensure streak-free and crystal-clear windows</h2>
        </div>
      </div>
      <div className='hidden md:block mx-auto mt-7 text-center'>
        <h2 className=' w-2/6 m-auto'>Trained and certified window cleaning experts with a keen eye for detail</h2>
      </div>
    </div>
  )
}

export default About
