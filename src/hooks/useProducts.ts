import { useContext } from 'react'
import ProductContext from '../contexts/ProductsContext'

const useProducts = () => useContext(ProductContext)

export default useProducts
