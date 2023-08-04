import React from 'react'
import {cuisines} from '../constants/cuisines'
const CuisineTypes = () => {
  return (
    <div className=' grid  md:grid-cols-2 lg:grid-cols-3'>
      {cuisines?.map((cuisineType) => (
        <span
        key={cuisineType.id}
        className="text-white mx-8 flex  items-center text-sm  py-2 px-8 bg-mainButtonText rounded-lg my-4"
      >
        {cuisineType.value}
      </span>
      ))}
    </div>
  )
}

export default CuisineTypes
