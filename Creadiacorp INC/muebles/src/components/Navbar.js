// Import Material ICONS
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Import Images
import logo from '../images/ikea-logo.svg';


function Hero() {
  return(
    <nav>
      <div>
        <MenuIcon />
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Products</li>
        <li>Rooms</li>
        <li>Deals</li>
      </ul>
      <div>
        <SearchIcon />
        <InputBase />
      </div>
      <div>
        <LocalShippingIcon />
        <PersonIcon />
        <FavoriteIcon />
        <ShoppingCartIcon />
      </div>
    </nav>
  )
}



export default Hero;