import React from 'react'
import type { FC } from 'react'
import type { Product } from '../models/Product'
import { useForm } from 'react-hook-form'
import { Button, InputGroup, NumericInput } from '@blueprintjs/core'

interface Props {
  productToEdit?: Product
  onSubmit: (data: Product) => void
}

const ProductForm: FC<Props> = ({ productToEdit, onSubmit }) => {
  const { register, handleSubmit } = useForm<Product>({
    defaultValues: {
      name: productToEdit ? productToEdit.name : '',
      description: productToEdit ? productToEdit.description : '',
      pricing: productToEdit ? productToEdit.pricing : '',
      discount: productToEdit ? productToEdit.discount : 0,
      price: productToEdit ? productToEdit.price : 0,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="product-form-container">

      <InputGroup
        {...register('name', { required: true })}
        placeholder="Name"
        className="input-field"
      />

      <InputGroup
        {...register('description', { required: true })}
        placeholder="Description"
        multiple
        className="input-field"
      />

      <InputGroup
        {...register('name', { required: true })}
        placeholder="Pricing"
        className="input-field"
      />

      <div className="product-form-numeric-container">
        <NumericInput
          {...register('price', { required: true })}
          placeholder="Price"
          leftIcon="tag"
          min={1}
          className="right-margin"
        />

        <NumericInput
          {...register('discount', { required: true })}
          placeholder="Discount"
          leftIcon="percentage"
          max={100}
          min={0}
        />
      </div>

      <div>
        <Button className="right-margin" text={productToEdit ? 'Modify Product' : 'Add Product'} />
        <Button text="Cancel" />
      </div>

    </form>
  )
}

export default ProductForm
