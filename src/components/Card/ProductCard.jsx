/* eslint-disable react/prop-types */

import useProduct from "../../hooks/useProduct";

const ProductCard = ({ product }) => {
  const { _id, image, name, price } = product;
  const { addProduct } = useProduct();

  return (
    <div className="border border-gray-300 rounded p-3  h-full cursor-pointer flex flex-col justify-center shadow-lg hover:shadow-xl duration-300 text-center">
      <img src={image} alt="" className="h-32 w-32 object-contain mx-auto" />
      <div className="mt-5">
        <h3 className="text-base font-semibold text-gray-700">{name}</h3>

        <p className=" text-gray-600 mt-2 font-semibold">${price}</p>
      </div>

      <div className="">
        <button
          onClick={() => addProduct(_id, 1, image, name, price)}
          className=" px-4 py-1 rounded bg-blue-400 hover:bg-blue-500 duration-300 text-white mt-2  "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
