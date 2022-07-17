import Link from "next/link"
import Image from "next/image"
import logo from '/public/logo/foodieland.png'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="divide-y divide-black border-2 border-blue-600">
      <div className="flex justify-between items-center border-2 border-green-500">
        <div>
          <Image src={logo} />
          <p>Lorem ipsum klp klp</p>
        </div>
        <div className="flex p-2 space-x-16 font-medium">
          <Link href="/recipes" passHref>Recipes</Link>
          <Link href="/blog" passHref>Blog</Link>
          <Link href="/about" passHref>About Us</Link>
          <Link href="/contact" passHref>Contact</Link>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/4 text-center border-4 border-black">
          © 2022 Foodieland. All rights reserved.
        </div>
        <div className="w-1/4 flex items-center justify-end space-x-10 text-2xl border-2 border-pink-600">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      </div>
    </div>
    
  )
}

export default Footer