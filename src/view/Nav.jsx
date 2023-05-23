import { TbWindow } from 'react-icons/tb'

function Nav() {
  return (
    <div className='flex items-center px-10 py-3 text-neutral-200 fixed w-full bg-transparent'>
      <a href='#hero' className='mr-auto text-4xl'>
        <TbWindow />
      </a>
      <div className='flex gap-14 font-lato font-light text-xl justify-between items-center uppercase'>
        <a href='#'>services</a>
        <a href='#'>about</a>
        <a href='#'>contact</a>
      </div>
    </div>
  )
}

export default Nav
