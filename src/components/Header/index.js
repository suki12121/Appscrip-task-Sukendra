import {LuFlower} from 'react-icons/lu'
import {CiSearch} from 'react-icons/ci'
import {IoIosHeartEmpty, IoIosArrowDown} from 'react-icons/io'
import {GiSchoolBag} from 'react-icons/gi'
import {IoPersonOutline} from 'react-icons/io5'
import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-bg">
    <div className="logo-bg">
      <div className="header-logo-icon">
        <BsFilterLeft className="logo-icon responsive" />
        <LuFlower className="logo-icon" />
      </div>
      <h1 className="logo-heading">LOGO</h1>
      <div className="icons-bg">
        <CiSearch className="filter-icon" />
        <IoIosHeartEmpty className="filter-icon" />
        <GiSchoolBag className="filter-icon" />
        <IoPersonOutline className="filter-icon" />
        <div className="language-bg">
          <p className="language-change">ENG</p>
          <IoIosArrowDown className="filter-icon" />
        </div>
      </div>
    </div>
    <div className="tabs-bg">
      <p className="tabs">SHOP</p>
      <p className="tabs">SKILLS</p>
      <p className="tabs">STORIES</p>
      <p className="tabs">ABOUT</p>
      <p className="tabs">CONTACT US</p>
    </div>
    <div className="home-shop-bg">
      <h3 className="home">HOME</h3>
      <hr className="divider" />
      <h3 className="shop">SHOP</h3>
    </div>
  </div>
)

export default Header
