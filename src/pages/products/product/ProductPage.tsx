import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/productsApi";
import { useSelector } from "@/redux/store";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const createdProducts = useSelector(
    (state) => state.products.createdProducts
  );
  const { data: product } = useGetProductByIdQuery(Number(id));
  const currentProduct = product
    ? product
    : createdProducts.find((item) => item.id === Number(id));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={currentProduct?.image}
          alt={currentProduct?.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{currentProduct?.title}</h2>
        <p className="text-gray-600 text-sm">{currentProduct?.description}</p>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Details</h3>
          <p className="text-2xl text-green-600 font-bold">
            ${currentProduct?.price}
          </p>
          <p>Category: {currentProduct?.category}</p>
        </div>
      </div>
    </div>
  );
};
