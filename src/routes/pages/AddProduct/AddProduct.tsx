import React, { useCallback } from 'react'
import ProductForm from '../../../components/ProductForm'
import type { Product } from '../../../models/Product'

const AddProduct = () => {
  const addProduct = useCallback((product: Product) => {
    fetch('https://a.nacapi.com/adminProducts/', {
      method: 'post',
      body: JSON.stringify(product),
    }).then(function (response) {
      return response.json()
    })
      .then(function (data) {
        console.log('data', data)
      })
  }, [])

  return (
    <ProductForm onSubmit={addProduct} />
  )
}

export default AddProduct
