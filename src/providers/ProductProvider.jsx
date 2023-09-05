/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load products from local storage when the component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Update local storage whenever the products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  //  add a product to the state
  const addProduct = (productId, quantity, image, name, price) => {
    if (!productId || !quantity || !image || !name || !price) {
      return;
    }

    const newProduct = {
      _id: productId,
      quantity: parseInt(quantity),
      image,
      name,
      price,
    };

    // Check if the product with the same ID already exists
    const existingProductIndex = products.findIndex(
      (product) => product._id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += newProduct.quantity;
      setProducts(updatedProducts);
      toast.success("Successfully created!");
    } else {
      // If the product does not exist, add it to the state
      setProducts([...products, newProduct]);
      toast.success("Successfully created!");
    }
  };

  //  remove a product from the state
  const removeProduct = (_id) => {
    const updatedProducts = products.filter((product) => product._id !== _id);
    setProducts(updatedProducts);
    toast.success("product removed");
  };

  //  increase product quantity
  const increaseQuantity = (_id) => {
    const updatedProducts = products.map((product) => {
      if (product._id === _id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  //  decrease product quantity
  const decreaseQuantity = (_id) => {
    const updatedProducts = products.map((product) => {
      if (product._id === _id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const productInfo = {
    products,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
