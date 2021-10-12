import React, { useCallback } from 'react'
import ProductForm from '../../../components/ProductForm'
import useProducts from '../../../hooks/useProducts'
import type { Product } from '../../../models/Product'

const AddProduct = () => {
  const { products, getProducts } = useProducts()

  const addProduct = useCallback((product: Product) => {
    const productList = products
    productList.push(product)

    fetch('https://a.nacapi.com/adminProducts/', {
      method: 'post',
      body: JSON.stringify({ products: productList }),
    }).then(() => getProducts())
  }, [])

  return (
    <ProductForm onSubmit={addProduct} />
  )
}

export default AddProduct
