import React, { useCallback, useEffect, useState } from 'react'
import type { FC } from 'react'
import ProductContext from '../../contexts/ProductsContext'
import type { Product } from '../../models/Product'

const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])

  const getProducts = useCallback(async () => {
    const { products } = await fetch('https://a.nacapi.com/adminProducts')
      .then(data => data.json())
      .catch(console.error)

    setProducts(products)
  }, [])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
