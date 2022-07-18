import Image from "next/image"
import post1 from '../public/Post1.png'
import post2 from '../public/Post2.png'
import post3 from '../public/Post3.png'
import post4 from '../public/Post4.png'
import FaInstagram from 'react-icons/fa'

const InstagramLead = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 space-y-4 border-4 border-blue-500">
      <h2>Check out @foodieland on Instagram</h2>
      <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      <div className="w-full flex items-center justify-evenly">
        <Image src={post1} />
        <Image src={post2} />
        <Image src={post3} />
        <Image src={post4} />
      </div>
      <button>Visit Our Instagram</button>    
    </div>
  )
}

export default InstagramLead