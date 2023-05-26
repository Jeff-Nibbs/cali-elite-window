import { FiHeart } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

function PickMe() {
  return (
    <div
      id='services'
      className='lg:flex lg:justify-center lg:items-center lg:flex-col relative text-center p-5 text-neutral-200 font-prompt font-bold bg-[url("./assets/nook-room.jpg")] min-h-screen bg-no-repeat bg-cover bg-center md:bg-fixed bg-gray-500 bg-blend-multiply'
    >
      <h2 className='pt-10 w-10/12 m-auto lg:m-0 text-3xl md:text-5xl lg:text-8xl'>Discover the Advantage of Choosing Us</h2>
      <div className='md:flex justify-center mt-20 gap-10'>
        <div className='bg-neutral-800 border border-neutral-200 bg-opacity-70 max-w-md shadow rounded-xl p-5 my-7'>
          <FiHeart className='text-5xl m-auto text-sky-500' />
          <h3 className='text-xl font-prompt md:text-4xl md:mb-5'>Honesty</h3>
          <p className='text-xs md:text-base font-lato font-light text-justify'>
            At California Elite Windows LLC, we prioritize honesty as the foundation of our operations. We believe in transparent communication and
            providing accurate information to our clients. When you choose our services, you can trust that we will always be upfront about pricing,
            timelines, and any limitations.
          </p>
        </div>
        <div className='bg-neutral-800 border border-neutral-200 bg-opacity-70 max-w-md shadow rounded-xl p-5 my-7'>
          <FaHandshake className='text-5xl m-auto text-sky-500' />
          <h3 className='text-xl font-prompt md:text-4xl md:mb-5'>Integrity</h3>
          <p className='text-xs md:text-base font-lato font-light text-justify'>
            Integrity is the guiding principle behind everything we do. We hold ourselves to the highest ethical standards, ensuring that each task is
            performed with diligence and professionalism. Our team consists of skilled and trained professionals who take pride in their work. We are
            committed to delivering exceptional results while respecting your property and privacy.
          </p>
        </div>
        <div className='bg-neutral-800 border border-neutral-200 bg-opacity-70 max-w-md shadow rounded-xl p-5 my-7'>
          <FiHome className='text-5xl m-auto text-sky-500' />
          <h3 className='text-xl font-prompt md:text-4xl md:mb-5'>Service</h3>
          <p className='text-xs md:text-base font-lato font-light text-justify'>
            Service excellence is the cornerstone of our window washing business. We are dedicated to providing a superior customer experience from
            start to finish. Our friendly and knowledgeable team is always ready to address your questions, concerns, and specific requirements. We go
            the extra mile to ensure your satisfaction, delivering meticulous window cleaning that exceeds your expectations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PickMe
