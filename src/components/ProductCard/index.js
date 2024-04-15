import {useState} from 'react'
import {GoHeart} from 'react-icons/go'
import './index.css'

const ProductCard = props => {
  const {product} = props
  const {image, title, price} = product

  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <div className="price-liked-bg">
        <p className="product-price">${price}</p>
        <GoHeart
          className={`product-like-icon ${liked ? 'liked' : ''}`}
          onClick={handleLikeClick}
        />
      </div>
    </div>
  )
}

export default ProductCard
