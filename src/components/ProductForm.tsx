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
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <FormGroup
            helperText={errors.name?.message}
            intent={!!errors && errors.name ? 'danger' : 'none'}
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
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <FormGroup
            helperText={errors.description?.message}
            intent={!!errors && errors.description ? 'danger' : 'none'}
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
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <FormGroup
            helperText={errors.pricing?.message}
            intent={!!errors && errors.pricing ? 'danger' : 'none'}
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
          rules={{ validate: (value) => value >= 1 || 'Can\'t be smaller than 1' }}
          render={({ field }) => (
            <FormGroup
              helperText={errors.price?.message}
              intent={!!errors && errors.price ? 'danger' : 'none'}
              label="Price"
              labelFor="price-input"
            >
              <NumericInput
                {...field}
                allowNumericCharactersOnly
                onValueChange={field.onChange}
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
          rules={{ validate: (value) => value <= 100 || 'Can\'t be bigger than 100' }}
          render={({ field }) => (
            <FormGroup
              helperText={errors.discount?.message}
              intent={!!errors && errors.discount ? 'danger' : 'none'}
              label="Discount"
              labelFor="discount-input"
            >
              <NumericInput
                {...field}
                allowNumericCharactersOnly
                onValueChange={field.onChange}
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
