import {CiSearch} from 'react-icons/ci'
import {PiBagSimple, PiBookmarkSimple} from 'react-icons/pi'
import {IoPersonOutline} from 'react-icons/io5'
import './index.css'

const Header = () => (
  <>
    <div className="header-bg">
      <div className="heading-icon-bg">
        <h1 className="header-heading">TANN TRIM</h1>
        <div className="header-icon-bg">
          <CiSearch className="header-icon" />
          <IoPersonOutline className="header-icon" />
          <PiBagSimple className="header-icon" />
          <PiBookmarkSimple className="header-icon" />
        </div>
      </div>
      <div className="tabs-list">
        <h3 className="tab-item">Bags</h3>
        <h3 className="tab-item">Travel</h3>
        <h3 className="tab-item">Accesories</h3>
        <h3 className="tab-item">Gifting</h3>
        <h3 className="tab-item">Jewelery</h3>
      </div>
      <div className="filter-options-bg">
        <div className="category-bg">
          <div>
            <img
              src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713146519/vjk5fueijjwbvtwvnkny.png"
              alt="filter-options"
              className="filter-option"
            />
            <img
              src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713147130/eut4n9idwqinorgfbclh.png"
              alt="filter-options"
              className="filter-option"
            />
          </div>
          <h4 className="filter-heading">All Bags</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713147309/xvhscgwxwnpqz5sshlpe.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Vaniny Pouch</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713147421/kqawvnbtk4maptw1tfc5.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Tote Bag</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713147506/m8ifesgjhonpqnjecgii.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Duffel Bag</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713147577/r9znhnccuni4u6dmjwrf.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Laptop</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713148109/jdxqmghlt5cammlnvyvh.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Messenger Bags</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713148062/wuikaknokeq3ugscmu7h.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Slings Bags</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713148218/m4suho47jg88zxhv46oo.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Handsbags</h4>
        </div>
        <div className="category-bg">
          <img
            src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1713148275/yxwd7urk26g6mmbadlj8.png"
            alt="filter-options"
            className="filter-option"
          />
          <h4 className="filter-heading">Buck</h4>
        </div>
      </div>
    </div>
  </>
)

export default Header
