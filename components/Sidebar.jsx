import Image from 'next/image'
import Link from 'next/link'

import ad from '../public/Ads.png'
import recipecover from '../public/recipeprev.png'


const Sidebar = () => {
  return (
    <div className='space-y-2'>
      <h3 className='font-bold'>Other Recipes</h3>
      <div className='flex space-x-4 items-center'>
        <Image src={recipecover} className='rounded-3xl' />
        <div className=''>
          <a href='/' className='font-bold text-xl hover:underline leading-none'>Chicken Meatball with Creamy Cheese</a>
          <h5 className='text-lg opacity-80 font-medium '>By Author</h5>
        </div>
      </div>
      <div className='flex space-x-4 items-center'>
        <Image src={recipecover} className='rounded-3xl' />
        <div className=''>
          <a href='/' className='font-bold text-xl hover:underline leading-none'>Chicken Meatball with Creamy Cheese</a>
          <h5 className='text-lg opacity-80 font-medium '>By Author</h5>
        </div>
      </div>
      <div className='flex space-x-4 items-center'>
        <Image src={recipecover} className='rounded-3xl' />
        <div className=''>
          <a href='/' className='font-bold text-xl hover:underline leading-none'>Chicken Meatball with Creamy Cheese</a>
          <h5 className='text-lg opacity-80 font-medium '>By Author</h5>
        </div>
      </div>
      <Image src={ad} className='mt-10'/>
    </div>
  )
}

export default Sidebar