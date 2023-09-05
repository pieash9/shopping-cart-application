import { Link } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import CartModal from "../Modal/CartModal";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";

const Navbar = () => {
  const { user } = useProduct();
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <nav className=" bg-base-100  shadow-xl sticky top-0">
      {/* cart modal */}
      <CartModal isOpen={isOpen} closeModal={closeModal} />
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start ">
          <Link
            to="/"
            className=" normal-case text-2xl font-semibold text-gray-700"
          >
            Shop Crafter
          </Link>
        </div>
        <div className="navbar-end">
          <div
            className="text-gray-600 mr-2 tooltip tooltip-bottom"
            data-tip="User"
          >
            <FaRegUserCircle size={24} />
          </div>
          <div className="px-3 relative">
            <div className="badge badge-info badge-sm text-xs absolute -mt-2 -right-2 ">
              {/* All cart items count */}0
            </div>
            <FaShoppingCart
              onClick={() => setIsOpen(true)}
              size={22}
              className="text-blue-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
