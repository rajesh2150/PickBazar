import React from 'react'
import ProductList from './ProductList'
import Filter from './Filter'

const ProductFilterComponents = ({category,setCategory}) => {
  return (
    <div>
        <Filter setCategory={setCategory}/>
        <ProductList category={category}/>
      
    </div>
  )
}

export default ProductFilterComponents
