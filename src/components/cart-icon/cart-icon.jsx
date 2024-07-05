import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartDropdownContext } from "../../context/cart-dropdown";
import { useContext } from "react";
const CartIcon = () => {
  const { setStatus } = useContext(CartDropdownContext);
  const changeStatus = () => {
    setStatus((prev) => !prev);
  };
  return (
    <div className="cart-icon-container" onClick={changeStatus}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};
export default CartIcon;
