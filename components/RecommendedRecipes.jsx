import RecipePreviewMain from "./RecipePreviewMain"
import { baseUrl, fetchApi } from "../utils/fetchApi"

const RecommendedRecipes = ( { recipelist }) => {
  console.log(recipelist)
  return (
    <div className="border-4 border-yellow-800">
      <div className="flex justify-evenly items-center p-20 border-2 border-green-400">
        <h2>Try this delicious recipe to make your day</h2>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 border-2 border-green-500">
        {
          recipelist.map((rcp) => 
          <RecipePreviewMain 
            recTitle={rcp.name} 
            recCover={rcp.thumbnail_url} 
            recSlug={rcp.slug} 
            recPrepTime={rcp.prep_time_minutes}
            recID={rcp.id} 
          />) 
        }
      </div>
    </div>
  )
}

export default RecommendedRecipes