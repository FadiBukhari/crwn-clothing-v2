import { createContext, useState } from "react";
export const CartDropdownContext = createContext({
  status: false,
});
export const CartDropdownProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const value = { status, setStatus };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
