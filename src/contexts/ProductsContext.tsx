import { createContext } from 'react'
import type { Product } from '../models/Product'

interface Context {
  products: Product[]
  getProducts: () => void
}

const ProductContext = createContext<Context>({
  products: [],
  getProducts: () => undefined,
})

export default ProductContext
