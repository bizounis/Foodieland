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
  console.log(Object.keys(recipeDetails.nutrition).length)

  const [checkIngredient, setCheckIngredient] = useState(false)
  const clickCheckIngr = () => setCheckIngredient(!checkIngredient)

  return (
    <div className='fcontainer space-y-10 pt-10'>
      {/* Recipe Header */}
      <div className='flex items-center justify-between'>
        <div className='space-y-6'>
          <h1>{recipeDetails.name}</h1>
          <div className='flex space-x-9 divide-x-2'>
            <div className='flex items-center space-x-4'>
              <Image src={avatar1} alt='user' />
              <div>
                <h6 className='text-base font-bold'>{recipeDetails.credits.map((creator) => creator.name)}</h6>
                <p className='text-sm'>Date Uploaded</p>
              </div>
            </div>

            {
             recipeDetails.prep_time_minutes > 0 ? <>
              
              <div className='flex items-center space-x-4 pl-5'>
                <RiTimerFill />
                <div>
                  <p className='text-base font-medium'>Prep Time</p>
                  <p className='text-sm'>{recipeDetails.prep_time_minutes} minutes</p>
                </div>
              </div>
             </> : <></>
            }
            
            {
             recipeDetails.cook_time_minutes > 0 ? <>
              
              <div className='flex items-center space-x-4 pl-5'>
                <RiTimerFill />
                <div>
                  <p className='text-base font-medium'>Cooking Time</p>
                  <p className='text-sm'>{recipeDetails.cook_time_minutes} minutes</p>
                </div>
              </div>
             </> : <></>
            }

            {
             recipeDetails.total_time_minutes > 0 ? <>
              
              <div className='flex items-center space-x-4 pl-5'>
                <RiTimerFill />
                <div>
                  <p className='text-base font-medium'>Total Time</p>
                  <p className='text-sm'>{recipeDetails.total_time_minutes} minutes</p>
                </div>
              </div>
             </> : <></>
            }

            {
             recipeDetails.num_servings > 0 ? <>
              
              <div className='flex items-center space-x-4 pl-5'>
                <ImSpoonKnife />
                <p className='text-sm'>{recipeDetails.num_servings} Servings</p>
              </div>
             </> : <></>
            }
          </div>
        </div>
        {/* Print Share Button */}
        <div className='hidden lg:flex items-center space-x-2 '>
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
        <div className='w-3/4 rounded-[60px] overflow-hidden object-fill'>
          <img src={recipeDetails.thumbnail_url} className='fill' />
        </div>
        <div className='w-1/4 p-6 rounded-[30px] bg-cyan-100 space-y-10'>
          <h4 >Nutrition Information</h4>
          <div className='space-y-4 divide-y-2 divide-gray-300'>    
            <div className='flex items-center justify-between'>
              <h6 className='opacity-60'>Calories</h6>
              <h6>{recipeDetails.nutrition.calories} kcal</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Carbohydrates</h6>
              <h6>{recipeDetails.nutrition.carbohydrates} g</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Fat</h6>
              <h6>{recipeDetails.nutrition.fat} g</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Fiber</h6>
              <h6>{recipeDetails.nutrition.fiber} g</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Protein</h6>
              <h6>{recipeDetails.nutrition.protein} g</h6>
            </div>
            <div className='flex items-center justify-between pt-6'>
              <h6 className='opacity-60'>Sugar</h6>
              <h6>{recipeDetails.nutrition.sugar} g</h6>
            </div>
          </div>

        </div>
      </div>

      <p>{recipeDetails.description}</p>

      {/* Recipe Instructions & Sidebar */}
      <div className='flex items-center justify-between border-2 border-green-900 space-x-10'>
        <div className='w-3/4 border-4 border-green-400'>
          <div>
            <h3 className='font-bold'>Ingredients</h3>
            <div className='space-y-5 mt-5'>
              <p className='opacity-50 italic'>*Once you got an ingredient you can click on the circle and tick it off your list</p>
              {
                recipeDetails.sections.map((getIng) =>
                  <>
                    {
                      getIng.name && (<h4>{getIng.name}</h4>)
                    }
                    {
                      getIng.components.map((ingr) => <Ingredient text={ingr.raw_text} /> )
                    }
                  </>
                )
              }
            </div>
          </div>
          {/* Recipe Directions */}
          <div className='space-y-5 mt-5'>
            <h3 className='font-bold'>Directions</h3>
            {
              recipeDetails.instructions.map((getInst) => <RecipeDirection direction={'Step ' + getInst.position} details={getInst.display_text} />)
            }
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

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/recipes/get-more-info?id=${id}`)

  return{
    props: {
      recipeDetails : data
    }
  }
}