import React from 'react'
import ProductList from './ProductList'
import Filter from './Filter'

const ProductFilterComponents = ({category,setCategory}) => {
  

  return (
    <div >
      <div style={{marginRight:50}}>
        <Filter setCategory={setCategory}/>
      </div>
        <ProductList category={category}/>
      
    </div>
  )
}

export default ProductFilterComponents

