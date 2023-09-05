import { useQuery } from "react-query";
import axios from "axios";

const useAllProductsData = () => {
  const {
    data: allProductsData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allProductsData"],
    queryFn: async () => {
      const res = await axios.get(
        `https://gadget-trove-server.vercel.app/products`
      );
      return res.data;
    },
  });

  return { allProductsData, refetch, isLoading };
};

export default useAllProductsData;
