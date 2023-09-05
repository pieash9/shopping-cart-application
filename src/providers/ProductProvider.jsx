/* eslint-disable react/prop-types */
import { createContext } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const productInfo = {
    user: { name: "pieash" },
  };
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
