import React from 'react'
import type { FC } from 'react'
import type { Product } from '../../../../models/Product'
import { Card, Elevation, Text } from '@blueprintjs/core'

interface Props {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {

  return (
    <Card elevation={Elevation.TWO}>
      <h3>{product.name}</h3>
      <Text>Description: {product.description}</Text>
      <Text>Pricing: {product.pricing}</Text>
      <Text>
        Price: {product.price}
        <br />
        Discount: {product.discount}
      </Text>
    </Card>
  )
}

export default ProductCard
