import { FaHeart } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'
import { ImSpoonKnife } from 'react-icons/im'

export default function RecipePreviewStyled ({recCover, recSlug, recTitle, recPrepTime, recID}){
  <div className='m-auto p-6 mt-8 rounded-[16px]'>
      <div className='relative overflow-hidden rounded-[16px]'>
        <a href={'/recipes/' + {recID}}>  
          <img src={recCover} alt={recSlug} />
        </a>
        <div className='absolute top-2 right-2 bg-gray-100 rounded-full p-3'>
          <FaHeart className='text-2xl text-gray-300 active:text-red-500'/>
        </div>
      </div>
      <div className='flex flex-col mt-2 '>
        <h4 className='font-xl font-bold '>{recTitle}</h4>
        <div className='flex items-center mt-2'>
          <div className='flex items-center space-x-1 mr-2'>
            <RiTimerFill />
            <p>{recPrepTime} minutes</p>
          </div>
          <div className='flex items-center space-x-1'>
            <ImSpoonKnife />
            <p>healthy</p>
          </div>
        </div>
      </div>
      
    </div>
}