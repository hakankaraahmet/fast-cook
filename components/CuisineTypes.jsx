const CuisineTypes = ({selectRecipe , cuisineList}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {cuisineList?.map((cuisineType) => (
        <span
          key={cuisineType.id}
          onClick={() => selectRecipe(cuisineType)}
          className={`flex items-center justify-between cursor-pointer px-4 py-2 mx-8 my-4 text-sm  rounded-lg   ${
            cuisineType.isSelected
              ? "bg-mainButtonText text-white"
              : "bg-white text-mainButtonText"
          }`}
        >
          {cuisineType.value}
          <span className="flex items-center justify-center scale-125 ">
            {cuisineType.icon}
          </span>
        </span>
      ))}
    </div>
  );
};

export default CuisineTypes;
