import {useState, useEffect} from 'react'
import {BsBoxArrowUp} from 'react-icons/bs'
import './index.css'
import ProductCard from '../ProductCard'

const Product = () => {
  // State for storing products
  const [products, setProducts] = useState([])

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/products/category/womens-bags',
        )
        const data = await response.json()
        setProducts(data.products) // Update state with fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }

    fetchProducts()
  }, []) // Empty dependency array means this effect runs once after initial render

  return (
    <div className="product-bg">
      <div className="bag-details">
        <h3 className="bag-heading">Bags . BackPacks</h3>
        <div className="total-bags">
          <h3 className="bag-heading">13 Products</h3>
          <BsBoxArrowUp className="bag-icon" />
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Product
