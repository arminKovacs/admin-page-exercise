import React from 'react'
import useProducts from '../../../hooks/useProducts'

const ProductList = () => {
  const { products } = useProducts()

  console.log(products)
  return (
    <div>

    </div>
  )
}

export default ProductList
