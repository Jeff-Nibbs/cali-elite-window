function Contact() {
  return (
    // <div className='flex flex-col justify-center items-center min-h-screen bg-neutral-200'>
    //   <h2 className='text-5xl font-prompt font-bold text-center text-neutral-800 my-10 w-1/2 mx-auto'>
    //     Experience the Brilliance of Crystal-Clear Windows!
    //   </h2>
    <div className='min-h-screen w-full lg:flex mx-auto '>
      <div className='h-80 lg:h-auto bg-center lg:w-1/2 flex-none bg-cover bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-fixed bg-[url("./assets/food-room.jpg")] bg-gray-300 bg-blend-multiply'></div>
      <div className='w-full border-r md:border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-neutral-200 rounded-b lg:rounded-b-none lg:rounded-r py-16 px-12 flex flex-col items-start justify-center leading-normal'>
        <h2 className='lg:text-5xl text-2xl md:text-4xl font-prompt font-bold text-neutral-800 my-10 md:w-10/12 lg:w-10/12 mx-auto'>
          Experience the Brilliance of Crystal-Clear Windows!
        </h2>
        <form onSubmit={() => console.log('we did it')} className='w-full flex flex-col gap-7 lg:justify-evenly justify-center'>
          <div className='flex items-center border-b border-teal-500 py-2 mb-3'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Full Name'
            />
          </div>

          <div className='flex items-center border-b border-teal-500 py-2 mb-3'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='email'
              placeholder='Email'
            />
          </div>

          <button
            className='flex-shrink-0 uppercase font-prompt bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-5 rounded'
            type='submit'
          >
            Get a free quote
          </button>
        </form>
      </div>
    </div>
    // </div>
  )
}

export default Contact