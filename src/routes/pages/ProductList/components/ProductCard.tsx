import React from 'react'
import type { FC } from 'react'
import type { Product } from '../../../../models/Product'
import { Button, Card, Elevation } from '@blueprintjs/core'

interface Props {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card elevation={Elevation.TWO}>
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <p>{product.pricing}</p>
      <p>{product.price}</p>
      <p>{product.discount}</p>
      <Button>Edit</Button>
    </Card>
  )
}

export default ProductCard
