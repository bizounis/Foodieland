import Head from 'next/head'
import Image from 'next/image'
import BlogLead from '../components/BlogLead'
import InstagramLead from '../components/InstagramLead'
import IntroRecipes from '../components/IntroRecipes'
import Newsletter from '../components/Newsletter'
import RecommendedRecipes from '../components/RecommendedRecipes'
import IntroCategories from '../components/IntroCategories'
import Slider from '../components/Slider'
import { baseUrl, fetchApi } from '../utils/fetchApi'

export default function Home({ recipes }) {
  console.log(recipes)
  return (
    <>
    <Slider />
    <div className='fcontainer'>
      <IntroCategories />
      <IntroRecipes recipelist={recipes}/>
      <BlogLead />
      <InstagramLead />
      <RecommendedRecipes recipelist={recipes}/>
      <Newsletter />
    </div>
    </>
  )
}

export async function getStaticProps(){
  const recipe = await fetchApi(`${baseUrl}/recipes/list?from=0&size=8&tags=under_30_minutes`)
  return{
    props:{
      recipes: recipe?.results,
    }
  }
}
