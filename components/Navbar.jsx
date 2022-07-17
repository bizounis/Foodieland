import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo/foodieland.png'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-2 border-orange-500'>
      <div>
        <Link href='/' passHref>
          <Image src={logo} />
        </Link>
      </div>
      <div className="flex p-2 space-x-16 font-normal">
        <Link href="/" passHref>Home</Link>
        <Link href="/recipes" passHref>Recipes</Link>
        <Link href="/blog" passHref>Blog</Link>
        <Link href="/about" passHref>About Us</Link>
        <Link href="/contact" passHref>Contact</Link>
      </div>
      <div className="flex items-center justify-end space-x-10 text-2xl border-2 border-pink-600">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </div>
    </div>
  )
}

export default Navbar