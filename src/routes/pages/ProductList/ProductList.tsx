import { Button, Divider, Text } from '@blueprintjs/core'
import React, { useCallback, useState } from 'react'
import useProducts from '../../../hooks/useProducts'
import ProductCard from './components/ProductCard'

const ProductList = () => {
  const { products } = useProducts()
  const [ascending, setAscending] = useState<boolean>(false)
  const [activeSort, setActiveSort] = useState<'name' | 'price' | 'discount'>('name')

  const sortProducts = useCallback((element) => {
    switch (element) {
      case 'name':
        if (ascending) {
          products.sort((a, b) => a.name.localeCompare(b.name))
        } else {
          products.sort((a, b) => b.name.localeCompare(a.name))
        }
        break
      case 'price':
        if (ascending) {
          products.sort((a, b) => a.price - b.price)
        } else {
          products.sort((a, b) => b.price - a.price)
        }
        break
      case 'discount':
        if (ascending) {
          products.sort((a, b) => a.discount - b.discount)
        } else {
          products.sort((a, b) => b.discount - a.discount)
        }
        break
    }
    setAscending(prevState => !prevState)
  }, [products, ascending])

  const handleSort = useCallback((element: 'name' | 'price' | 'discount') => {
    setActiveSort(element)
    sortProducts(element)
  }, [sortProducts])

  return (
    <div>

      <div className="sort-buttons-container">
        <Text className="center-text">
          Sort by:
        </Text>

        <Button
          value="name"
          onClick={() => handleSort('name')}
          active={activeSort === 'name'}
          text="Name"
          outlined
          disabled={!products || products.length < 1}
        />

        <Button
          value="price"
          onClick={() => handleSort('price')}
          active={activeSort === 'price'}
          text="Price"
          outlined
          disabled={!products || products.length < 1}
        />

        <Button
          value="discount"
          onClick={() => handleSort('discount')}
          active={activeSort === 'discount'}
          text="Discount"
          outlined
          disabled={!products || products.length < 1}
        />
      </div>

      {
        products
          ?
          products.map((product, index) => (
            <div key={product.name}>
              <ProductCard product={product} />
              {
                index !== (products.length - 1) &&
                <Divider />
              }
            </div>
          ))
          :
          <div>
            No products yet
          </div>
      }
    </div>
  )
}

export default ProductList
