import RecipePreviewStyled from "./RecipePreviewStyled"

const IntroRecipes = ({ recipelist }) => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-purple-600">
      <h2>Simple and tasty recipes</h2>
      <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      <div className="w-full grid grid-cols-3 grid-rows-3 border-2 border-pink-400">
        {
          recipelist.map((rcpi) => 
            <RecipePreviewStyled 
              recTitle={rcpi.name} 
              recCover={rcpi.thumbnail_url} 
              recSlug={rcpi.slug} 
              recPrepTime={rcpi.prep_time_minutes}
              recID={rcpi.id} 
          />)
        }
      </div>
    </div>
  )
}

export default IntroRecipes