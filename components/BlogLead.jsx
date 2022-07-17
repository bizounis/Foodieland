import Image from "next/image"
import chef from '../public/chef.png'

const BlogLead = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 border-4 border-yellow-500">
      <div className="flex flex-col items-start justify-center space-y-10 p">
        <h2>Everyone can be a chef in their own kitchen</h2>
        <p className="pr-20">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <button>Learn More</button>
      </div>
      <div className="flex justify-center rounded-[50px] bg-gradient-to-t from-sky-100">
        <Image src={chef} className='border-2 border-black' />
      </div>
    </div>
  )
}

export default BlogLead