import { Divider } from '@blueprintjs/core'
import React from 'react'
import useProducts from '../../../hooks/useProducts'
import ProductCard from './components/ProductCard'

const ProductList = () => {
  const { products } = useProducts()

  return (
    <>
      {products.map((product, index) => (
        <div key={product.name}>
          <ProductCard product={product} />
          {
            index !== (products.length - 1) &&
            <Divider />
          }
        </div>
      ))}
    </>
  )
}

export default ProductList
