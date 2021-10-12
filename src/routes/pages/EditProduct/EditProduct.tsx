import React, { useState, useCallback } from 'react'
import ProductForm from '../../../components/ProductForm'
import useProducts from '../../../hooks/useProducts'
import type { Product } from '../../../models/Product'
import ProductSelector from './components/ProductSelector'

const EditProduct = () => {
  const [productToEdit, setProductToEdit] = useState<Product>()
  const { products, getProducts } = useProducts()

  const editProduct = useCallback((product: Product) => {
    const productIndex = products.findIndex(productInList => product.id === productInList.id)
    const productList = products
    productList[productIndex] = product

    fetch('https://a.nacapi.com/adminProducts/', {
      method: 'put',
      body: JSON.stringify({ products: productList }),
    }).then(() => getProducts())
  }, [])

  return (
    <>
      <ProductSelector setProductToEdit={setProductToEdit} productToEdit={productToEdit} />

      {
        productToEdit &&
        <ProductForm productToEdit={productToEdit} onSubmit={editProduct} />
      }
    </>
  )
}

export default EditProduct
