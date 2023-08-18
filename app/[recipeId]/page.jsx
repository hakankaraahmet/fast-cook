import React from 'react'
import RecipeDetailContainer from '../../containers/RecipeDetailContainer'

const RecipeDetailPage = ({params}) => {
  return (
    <div className='text-mainDarkText'>
      <RecipeDetailContainer params={params}/>
    </div>
  )
}

export default RecipeDetailPage
