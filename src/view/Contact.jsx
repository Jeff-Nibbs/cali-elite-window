import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="min-h-screen w-full lg:flex mx-auto ">
      <div className='h-80 lg:h-auto bg-center lg:w-1/2 flex-none bg-cover bg-no-repeat rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden md:bg-fixed bg-[url("./assets/food-room.jpg")] bg-gray-300 bg-blend-multiply'></div>
      <div className="w-full border-r md:border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-neutral-200 rounded-b lg:rounded-b-none lg:rounded-r py-16 px-12 flex flex-col items-start justify-center leading-normal">
        <h2 className="lg:text-5xl text-2xl md:text-4xl font-prompt font-bold text-neutral-800 my-10 md:w-10/12 lg:w-10/12 mx-auto">
          Experience the Brilliance of Crystal Clear Windows!
        </h2>
        <div className="flex flex-col gap-7 my-10 md:w-10/12 lg:w-10/12 mx-auto">
          <motion.a
            href="tel:5303880160"
            whileHover={{ scale: 0.9, x: -15 }}
            whileTap={{ scale: 0.9 }}>
            <p className="flex gap-3 lg:gap-7 font-lato text-neutral-800 text-xl lg:text-3xl items-center">
              <BsFillTelephoneFill className="text-sky-500" /> (530) 388-0160
            </p>
          </motion.a>
          <motion.a
            href="mailto: dakota@calielitewindows.com"
            whileHover={{ scale: 0.9, x: -15 }}
            whileTap={{ scale: 0.9 }}>
            <p className="flex gap-3 lg:gap-7 font-lato text-neutral-800 text-xl lg:text-3xl items-center">
              <GrMail className="text-sky-500" /> dakota@calielitewindows.com
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
