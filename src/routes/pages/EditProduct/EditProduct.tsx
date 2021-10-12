import React, { useState, useCallback } from 'react'
import ProductForm from '../../../components/ProductForm'
import type { Product } from '../../../models/Product'
import ProductSelector from './components/ProductSelector'

const EditProduct = () => {
  const [productToEdit, setProductToEdit] = useState<Product>()

  const editProduct = useCallback((product: Product) => {
    fetch('https://a.nacapi.com/adminProducts/', {
      method: 'put',
      body: JSON.stringify(product),
    }).then(function (response) {
      return response.json()
    })
      .then(function (data) {
        console.log('data', data)
      })
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
