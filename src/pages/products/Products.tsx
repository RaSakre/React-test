import ProductLink from "./product/ProductLink";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../redux/productsApi";
import { toggleLike, deleteProductById } from "@/redux/products-slice";
import { useDispatch, useSelector } from "../../redux/store";
import { useState } from "react";

const Products = () => {
  const [filter, setFilter] = useState<"all" | "liked">("all");
  const [limit, setLimit] = useState<number>(4);
  const [inputQuery, setInputQuery] = useState<string>("");
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery(String(limit));
  const maxLimit = 20;
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();

  const likedProducts = useSelector((state) => state.products.likedIds);
  const createdProducts = useSelector(
    (state) => state.products.createdProducts
  );
  const deletedProducts = useSelector((state) => state.products.deletedIds);

  const handleToggleLike = (id: number) => {
    dispatch(toggleLike(id));
  };

  const allProducts = products
    ? [...products, ...createdProducts]
    : createdProducts;
  const filteredProducts = allProducts
    ?.filter((product) => !deletedProducts.includes(product.id))
    ?.filter((product) =>
      filter === "all" ? true : likedProducts.includes(product.id)
    )
    .filter((product) =>
      product.title.toLowerCase().includes(inputQuery.toLowerCase())
    );

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id).unwrap();
      dispatch(deleteProductById(id));
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex gap-4">
        <select
          className="mb-4 bg-gray-200 border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name=""
          id=""
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | "liked")}
        >
          <option value="all">Показать все</option>
          <option value="liked">Показать избранные</option>
        </select>
        <div>
          <input
            className="bg-gray-200 border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            type="text"
            placeholder="Найдите продукт"
          />
        </div>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 mb-4">
        {isLoading && <p>Loading...</p>}
        {error && (
          <p>Error: {"status" in error ? error.status : "An error occurred"}</p>
        )}
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <li
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 relative flex flex-col"
            >
              <ProductLink
                isLiked={likedProducts.includes(product.id)}
                deleteProduct={handleDeleteProduct}
                handleToggleLike={handleToggleLike}
                product={product}
              />
            </li>
          ))
        ) : (
          <p>Нет избранных товаров</p>
        )}
      </ul>
      {filter !== "liked" && (
        <div className="flex justify-center">
          <button
            onClick={() => setLimit(limit < maxLimit ? limit + 4 : limit)}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
          >
            Загрузить больше товаров
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
