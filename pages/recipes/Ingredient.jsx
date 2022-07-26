import { useState } from 'react'
import { BsCheck } from 'react-icons/bs'

export default function Ingredient( { text }) {
  const [checkIngredient, setCheckIngredient] = useState(true)
  const clickCheckIngr = () => setCheckIngredient(!checkIngredient)

  return(
    <div>
      <div className='flex items-center space-x-3'>
        <a onClick={clickCheckIngr} className={checkIngredient? 'border-2 border-gray-300 text-center text-white rounded-full' :
                                                                'border-2 border-black text-center text-white bg-black rounded-full'}
        >
          <BsCheck className='text-xl'/>
        </a>
        <h6 className={!checkIngredient ? 'line-through opacity-50 font-normal capitalize' : 'font-normal capitalize'}>{text}</h6>
        
      </div>
      <div className='border border-gray-100 mt-4'></div>
    </div>
    
  )
}