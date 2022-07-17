import Head from 'next/head'
import Image from 'next/image'
import BlogLead from '../components/BlogLead'
import InstagramLead from '../components/InstagramLead'
import IntroRecipes from '../components/IntroRecipes'
import Newsletter from '../components/Newsletter'
import RecommendedRecipes from '../components/RecommendedRecipes'
import IntroCategories from '../components/IntroCategories'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
    <Slider />
    <div className='fcontainer'>
      <IntroCategories />
      <IntroRecipes />
      <BlogLead />
      <InstagramLead />
      <RecommendedRecipes />
      <Newsletter />
    </div>
    </>
  )
}
