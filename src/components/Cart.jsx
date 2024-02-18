import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContextObject = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartContextObject.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" && handleCloseCart}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartContextObject.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => cartContextObject.addItem(item)}
            onDecrease={() => cartContextObject.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartContextObject.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout </Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
