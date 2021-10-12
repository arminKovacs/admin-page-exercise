import React, { useCallback, useMemo, useEffect } from 'react'
import type { FC } from 'react'
import type { Product } from '../models/Product'
import { useForm, Controller } from 'react-hook-form'
import { Button, FormGroup, InputGroup, NumericInput } from '@blueprintjs/core'
import useProducts from '../hooks/useProducts'

interface Props {
  productToEdit?: Product
  onSubmit: (data: Product) => void
}

const ProductForm: FC<Props> = ({ productToEdit, onSubmit }) => {
  const { products } = useProducts()
  const defaultValues = useMemo(() => ({
    id: products.length + 1,
    name: '',
    description: '',
    pricing: '',
    discount: 0,
    price: 1,
    monthlySubs: 0,
  }), [])
  const { handleSubmit, control, formState: { errors }, reset } = useForm<Product>({ defaultValues, mode: 'onChange' })

  const submitData = useCallback((e) =>
    handleSubmit(data => {
      onSubmit(data)
    })(e), [handleSubmit])

  useEffect(() => {
    if (productToEdit) {
      reset({ ...productToEdit })
    }
  }, [productToEdit])

  return (
    <form onSubmit={submitData} className="product-form-container">

      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <FormGroup
            /* helperText="Helper text with details..." */
            label="Product name"
            labelFor="name-input"
          >
            <InputGroup
              {...field}
              className="input-field"
              id="name-input"
            />
          </FormGroup>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <FormGroup
            /* helperText="Helper text with details..." */
            label="Description"
            labelFor="description-input"
          >
            <InputGroup
              {...field}
              className="input-field"
              id="description-input"
            />
          </FormGroup>
        )}
      />

      <Controller
        control={control}
        name="pricing"
        render={({ field }) => (
          <FormGroup
            /* helperText="Helper text with details..." */
            label="Pricing"
            labelFor="name-input"
          >
            <InputGroup
              {...field}
              className="input-field"
              id="pricing-input"
            />
          </FormGroup>
        )}
      />

      <div className="product-form-numeric-container">
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <FormGroup
              /* helperText="Helper text with details..." */
              label="Price"
              labelFor="price-input"
            >
              <NumericInput
                {...field}
                leftIcon="tag"
                min={1}
                className="right-margin"
                id="price-input"
              />
            </FormGroup>
          )}
        />

        <Controller
          control={control}
          name="discount"
          render={({ field }) => (
            <FormGroup
              /* helperText="Helper text with details..." */
              label="Discount"
              labelFor="discount-input"
            >
              <NumericInput
                {...field}
                leftIcon="percentage"
                id="discount-input"
                max={100}
                min={0}
              />
            </FormGroup>
          )}
        />
      </div>

      <div className="form-submit-button-container">
        <Button
          className="submit-form-button"
          text={productToEdit ? 'Modify Product' : 'Add Product'}
          type="submit"
        />
      </div>

    </form>
  )
}

export default ProductForm
