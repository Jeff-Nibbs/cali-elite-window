import kidWashing from '../assets/kid-cleaning.jpg'

function About() {
  return (
    <div className='max-w-screen-xl mx-auto py-20 min-h-screen text-neutral-700 text-xl font-lato font-light'>
      <h2 className='text-4xl text-neutral-800 md:text-6xl lg:text-7xl text-center font-prompt font-bold m-5'>
        Our Story: Bringing Clarity to Your Windows
      </h2>
      <div className='top flex gap-7 mx-auto'>
        <div className='flex flex-col justify-evenly '>
          <h2>Unparalleled expertise in tackling even the toughest window cleaning challenges</h2>
          <h2>Focus on providing friendly and reliable customer service</h2>
        </div>
        <div className='w-11/12'>
          <img className='object-cover rounded-full' src={kidWashing} alt='kid washing windows' />
        </div>
        <div className='flex flex-col justify-evenly'>
          <h2>Customizable service plans tailored to meet specific window cleaning needs</h2>
          <h2>Attention to detail to ensure streak-free and crystal-clear windows</h2>
        </div>
      </div>
      <div className='mx-auto mt-7 text-center'>
        <h2>Trained and certified window cleaning experts with a keen eye for detail</h2>
      </div>
    </div>
  )
}

export default About
