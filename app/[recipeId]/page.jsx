import React from 'react'
import RecipeDetailContainer from '../../containers/RecipeDetailContainer'

const RecipeDetailPage = ({params}) => {
  return (
    <div className='text-mainDarkText flex-1 relative flex  gradient-background'>
      <RecipeDetailContainer params={params}/>
    </div>
  )
}

export default RecipeDetailPage


