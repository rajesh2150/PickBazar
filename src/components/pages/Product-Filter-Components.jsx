import React from 'react'
import ProductList from './ProductList'
import Filter from './Filter'

const ProductFilterComponents = ({category}) => {
  return (
    <div>
        {/* <Filter/> */}
        <ProductList category={category}/>
      
    </div>
  )
}

export default ProductFilterComponents
