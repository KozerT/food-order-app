import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartContextObject = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartContextObject.items.reduce(
    (totalNumberItems, item) => {
      return totalNumberItems + item.quantity;
    },
    0
  );

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="a restaurant" />
        <h1>Foodie</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
