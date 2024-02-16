import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const CartContextObject = useContext(CartContext);

  const totalCartItems = CartContextObject.items.reduce(
    (totalNumberItems, item) => {
      return totalNumberItems + item.quantity;
    },
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="a restaurant" />
        <h1>Foodie</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
