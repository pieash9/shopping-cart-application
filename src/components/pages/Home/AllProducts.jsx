import useAllProductsData from "../../../hooks/useAllProductsData";
import ProductCard from "../../Card/ProductCard";
import Loader from "../../utils/Loader";

const AllProducts = () => {
  const { allProductsData, isLoading } = useAllProductsData();
  return (
    <div className="mb-10">
      <div className="my-4">
        <h3 className="text-gray-600 text-xl my-1 font-medium">All Products</h3>
        <div className="flex items-center">
          <p className="text-gray-500 mb-5 text-sm ">Best Price Guarantee..!</p>
          <div className="flex-grow ml-4 border-gray-300 border-b" />
        </div>
      </div>
      {/* product loader */}
      {isLoading && <Loader />}
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-3">
        {allProductsData &&
          allProductsData.length > 0 &&
          allProductsData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
