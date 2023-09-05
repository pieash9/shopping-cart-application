import { useContext } from "react";
import { ProductContext } from "../providers/ProductProvider";

const useProduct = () => {
  const product = useContext(ProductContext);
  return product;
};

export default useProduct;
