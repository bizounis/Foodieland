import Image from "next/image"
import vector1 from '../public/salad1.png'
import vector2 from '../public/salad2.png'

const Newsletter = () => {
  return (
    <div className='relative h-96 w-full rounded-[50px] bg-sky-100 mt-10 mb-10 overflow-hidden'>
      <div className="absolute h-full w-full bottom-0 left-0 flex flex-row items-end justify-between">
        <Image src={vector1} className='h-full w-full object-contain' />
        <Image src={vector2} className='h-full w-full object-contain' />
      </div>
      <div className="absolute w-full h-full top-0 right-0 flex flex-col justify-center items-center space-y-4 text-center">
        <h2>Deliciousness to your inbox</h2>
        <p className="text-xl opacity-50">Sign up on our newsletter and receive new recipes.</p>
        <div className="border-2 border-black rounded-xl text-left">
          form
        </div>
      </div>
    </div>
  )
}

export default Newsletter