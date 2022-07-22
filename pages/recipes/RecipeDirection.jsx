import { useState } from 'react'
import { BsCheck } from 'react-icons/bs'

export default function RecipeDirection( { direction, details, image }) {
  const [checkDirection, setCheckDirection] = useState(true)
  const clickCheckDir = () => setCheckDirection(!checkDirection)

  return(
    <div className='space-y-4 space-x-9'>
      <div className='flex items-center space-x-3'>
        <a onClick={clickCheckDir} className={checkDirection? 'border-2 border-gray-300 text-center text-white rounded-full' :
                                                                'border-2 border-black text-center text-white bg-black rounded-full'}
        >
          <BsCheck className='text-xl'/>
        </a>
        <h4 className={!checkDirection ? 'line-through opacity-50' : ''}>{direction}</h4>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className='border border-gray-100 mt-4'></div>
    </div>
    
  )
}