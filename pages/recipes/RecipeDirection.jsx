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
      <p>{details}</p>
      <div className='border border-gray-100 mt-4'></div>
    </div>
    
  )
}