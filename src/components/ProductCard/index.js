import {TbShoppingBagPlus} from 'react-icons/tb'
import './index.css'

const ProductCard = props => {
  const {product} = props
  const {thumbnail, title, price, discountPercentage} = product

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <div className="price-save-bg">
        <div className="price-bg">
          <p className="product-price">${price}</p>
          <p className="original-price">8999</p>
          <p className="product-discount">({discountPercentage}%OFF)</p>
        </div>
        <TbShoppingBagPlus className="save-icon" />
      </div>
    </div>
  )
}

export default ProductCard
