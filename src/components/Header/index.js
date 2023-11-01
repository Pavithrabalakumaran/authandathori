// Write your JS code here
// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
    </div>
    <div className="header-rightside-content">
      <ul className="header-list">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-button">
        Log out
      </button>
      <button type="button" className="logout-button-small">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="logout-symbol"
          alt="nav logout"
        />
      </button>
    </div>
  </nav>
)

export default Header
