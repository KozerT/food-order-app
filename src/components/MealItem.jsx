import { useContext } from "react";
import { currencyFormatter } from "../util/formating.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

const MealItem = ({ meal }) => {
  const cartContextObject = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartContextObject.addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3001/${meal.image}`} alt={meal.name} />

        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
