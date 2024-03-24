import React from 'react'
import ProductList from './ProductList'
import Filter from './Filter'

const ProductFilterComponents = ({category,setCategory}) => {
  

  return (
    <div >
      <div >
        <Filter setCategory={setCategory}/>
      </div>
      <div style={{marginLeft:55}}>

        <ProductList category={category}/>
      </div>
      
    </div>
  )
}

export default ProductFilterComponents

