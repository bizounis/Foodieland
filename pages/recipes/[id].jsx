import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { baseUrl, fetchApi } from '../../utils/fetchApi'

import { RiTimerFill } from 'react-icons/ri'
import { ImSpoonKnife } from 'react-icons/im'
import { FiPrinter, FiShare } from 'react-icons/fi'
import { BsCheck } from 'react-icons/bs'

import avatar1 from '../../public/avatar.png'
import recipecover from '../../public/recipedummycover.png'
import Sidebar from '../../components/Sidebar'
import Newsletter from '../../components/Newsletter'
import RecommendedRecipes from '../../components/RecommendedRecipes'
import Ingredient from './Ingredient'
import RecipeDirection from './RecipeDirection'

export default function Recipe ({ recipeDetails }) {
  
  const router = useRouter()
  const { id } = router.query
  console.log(recipeDetails)

  const [checkIngredient, setCheckIngredient] = useState(false)
  const clickCheckIngr = () => setCheckIngredient(!checkIngredient)

  return (
    <div className='fcontainer space-y-10 pt-10'>
      {/* Recipe Header */}
      <div className='flex items-center justify-between'>
        <div className='space-y-6'>
          <h1>Recipe {id}</h1>
          <div className='flex space-x-9 divide-x-2'>
            <div className='flex items-center space-x-4'>
              <Image src={avatar1} alt='user' />
              <div>
                <h6 className='text-base font-bold'>Name Surname</h6>
                <p className='text-sm'>Date Uploaded</p>
              </div>
            </div>

            <div className='flex items-center space-x-4 pl-5'>
              <RiTimerFill />
              <div>
                <p className='text-base font-medium'>Prep Time</p>
                <p className='text-sm'>15 minutes</p>
              </div>
            </div>

            <div className='flex items-center space-x-4 pl-5'>
              <RiTimerFill />
              <div>
                <p className='text-base font-medium'>Cooking Time</p>
                <p className='text-sm'>15 minutes</p>
              </div>
            </div>

            <div className='flex items-center space-x-2 pl-5'>
              <ImSpoonKnife />
              <p className='text-base'>Chicken</p>
            </div>
          </div>
        </div>
        {/* Print Share Button */}
        <div className='flex items-center space-x-2 '>
          <div className='text-center'>
            <div className='bg-cyan-100 rounded-full p-6'>
              <FiPrinter className='text-gray-600 text-2xl'/>
            </div>
            <p className=''>Print</p>
          </div>
          <div className='text-center'>
            <div className='bg-cyan-100 rounded-full p-6'>
              <FiShare className='text-gray-600 text-2xl'/>
            </div>
            <p className=''>Share</p>
          </div>  
        </div>
      </div>

      {/* Recipe Cover & Nutrition */}
      <div className='flex items-center justify-between border-2 border-red-600 space-x-10'>
        <div className='w-3/4 border-2 border-black object-fill'>
          <Image src={recipecover} className='object-cover' />
        </div>
        <div className='w-1/4 p-6 rounded-[30px] bg-cyan-100 space-y-10'>
          <h4 >Nutrition Information</h4>
          <div className='space-y-4 divide-y-2 divide-gray-300'>    
            <div className='flex items-center justify-between'>
              <h6 className='opacity-60'>Calories</h6>
              <h6>219.9 kcal</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Calories</h6>
              <h6>219.9 kcal</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Calories</h6>
              <h6>219.9 kcal</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Calories</h6>
              <h6>219.9 kcal</h6>
            </div>
          </div>

        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* Recipe Instructions & Sidebar */}
      <div className='flex items-center justify-between border-2 border-green-900 space-x-10'>
        <div className='w-3/4 border-4 border-green-400'>
          <div>
            <h3 className='font-bold'>Ingredients</h3>
            <div className='space-y-5 mt-5'>
              <h4>For the Main Dish</h4>
              <Ingredient text={'Ingredient 1'} />
              <Ingredient text={'Ingredient 2'} />
              <Ingredient text={'Ingredient 3'} />
            </div>
          </div>
          {/* Recipe Directions */}
          <div className='space-y-5 mt-5'>
            <h3 className='font-bold'>Directions</h3>
            <RecipeDirection direction={'Step 1'} details={'Lorem'}/>
            <RecipeDirection direction={'Step 2'} details={'Lorem'}/>
          </div>
        </div>
        
        <div className='w-1/4 border-4 border-green-500'>
          <Sidebar />
        </div>
      </div>

      <Newsletter />

    </div>
  )
}