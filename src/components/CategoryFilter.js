import React, { useState } from "react";

function CategoryFilter({categories, filterFunction}) {
 const [selectedCategory, setSelectedCategory] = useState('');

  function handleClick(category){
    filterFunction(category);
    setSelectedCategory(category);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map((category, index) => {
          return <button className={selectedCategory === category? 'selected': null} key={index} onClick={() => handleClick(category)} >{category}</button>
      })
      }
    </div>
  );
}

export default CategoryFilter;
