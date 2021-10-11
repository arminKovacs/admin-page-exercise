import React, { useCallback, useState } from 'react'
import type { Dispatch, SetStateAction, FC } from 'react'
import type { ItemPredicate } from '@blueprintjs/select'
import { Select } from '@blueprintjs/select'
import type { Product } from '../../../../models/Product'
import useProducts from '../../../../hooks/useProducts'
import { Button, MenuItem } from '@blueprintjs/core'
import SelectProductMenuItem from './SelectProductMenuItem'

interface Props {
  productToEdit?: Product
  setProductToEdit: Dispatch<SetStateAction<Product | undefined>>
}

const ProductSelect = Select.ofType<Product>()

const ProductSelector: FC<Props> = ({ setProductToEdit, productToEdit }) => {
  const { products } = useProducts()

  const selectProductToEdit = useCallback((product: Product) => {
    setProductToEdit(product)
  }, [])

  const filterProduct: ItemPredicate<Product> = (query, product) => {
    return product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  }

  return (
    <ProductSelect
      items={products}
      itemRenderer={SelectProductMenuItem}
      itemPredicate={filterProduct}
      noResults={<MenuItem disabled text="No results." />}
      onItemSelect={selectProductToEdit}
    >
      <Button text={productToEdit ? productToEdit.name : 'Select product to edit'} rightIcon="caret-down" />
    </ProductSelect>
  )
}

export default ProductSelector
