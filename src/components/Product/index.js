import {useState, useEffect} from 'react'
import {FaChevronLeft, FaAngleDown} from 'react-icons/fa6'
import './index.css'
import ProductCard from '../ProductCard'

const Product = () => {
  // State for storing products
  const [products, setProducts] = useState([])
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data) // Update state with fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }

    fetchProducts()
  }, []) // Empty dependency array means this effect runs once after initial render

  return (
    <div className="product-bg">
      <div className="heading-bg">
        <h1 className="heading-title">DISCOVER OUR PRODUCTS</h1>
        <p className="heading-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="main-filter-bg-mobile">
        <h3 className="heading-title">FILTER</h3>
        <div className="recommended-bg">
          <select className="filter-option-description">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="high-to-low">PRICE: HIGH TO LOW</option>
            <option value="low-to-high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <div className="main-filter-bg">
        <div className="total-items-and-filter">
          <p className="total-items">3425 Items</p>
          <div className="filter-option">
            <FaChevronLeft className="filter-icon" />
            <p
              className="filter-matter"
              onClick={() => setShowFilterOptions(!showFilterOptions)}
            >
              Show Filter
            </p>
          </div>
        </div>
        <div className="recommended-bg">
          <select className="filter-option-description">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="high-to-low">PRICE: HIGH TO LOW</option>
            <option value="low-to-high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <div className="filter-product-bg">
        {showFilterOptions ? (
          <div className="product-filter-options">
            <div className="customizable-bg">
              <input type="checkbox" className="customizable-checkbox" />
              <p className="customizable-heading">CUSTOMIZABLE</p>
            </div>
            <div>
              <div className="select-filter">
                <div className="filter-options">
                  <p
                    className="filter-option-heading"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    IDEAL FOR
                  </p>
                  <FaAngleDown
                    className="filter-icon"
                    onClick={() => setShowFilters(!showFilters)}
                  />
                </div>
                <p className="filter-option-description">ALL</p>
                {showFilters ? (
                  <div className="options">
                    <p className="unselect-matter">unselect all</p>
                    <div className="options-bg">
                      <input type="checkbox" id="men-checkbox" />
                      <label htmlFor="men-checkbox">Men</label>
                    </div>
                    <div className="options-bg">
                      <input type="checkbox" id="women-checkbox" />
                      <label htmlFor="women-checkbox">Women</label>
                    </div>
                    <div className="options-bg">
                      <input type="checkbox" id="baby-kid-checkbox" />
                      <label htmlFor="baby-kid-checkbox">Baby & Kid</label>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="select-filter">
                <div className="filter-options">
                  <p className="filter-option-heading">OCCASION</p>
                  <FaAngleDown className="filter-icon" />
                </div>
                <p className="filter-option-description">ALL</p>
              </div>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">WORK</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">FABRIC</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">SEGMENT</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">SUITABLE FOR</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">RAW MATERIAL</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
            <div className="select-filter">
              <div className="filter-options">
                <p className="filter-option-heading">PATTREN</p>
                <FaAngleDown className="filter-icon" />
              </div>
              <p className="filter-option-description">ALL</p>
            </div>
          </div>
        ) : null}
        <div>
          <h1 className="new-products-heading">NEW PRODUCTS</h1>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
