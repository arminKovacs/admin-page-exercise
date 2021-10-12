import React from 'react'
import type { ItemRenderer } from '@blueprintjs/select'
import type { Product } from '../../../../models/Product'
import { MenuItem } from '@blueprintjs/core'

const RenderSelectProductMenuItem: ItemRenderer<Product> = (product, { handleClick, modifiers }) => {
  if (!modifiers.matchesPredicate) {
    return null
  }

  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      key={product.id}
      onClick={handleClick}
      text={product.name}
    />
  )
}

export default RenderSelectProductMenuItem
