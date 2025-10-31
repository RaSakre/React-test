import { NavLink } from "react-router-dom";
import type { IProduct } from "../../../types/types";
import heart from "@/assets/imgs/heart.svg";
import brokenHeart from "@/assets/imgs/heart-broken.svg";
import deleteIcon from "@/assets/imgs/delete.svg";
import styles from "./ProductLink.module.css";

interface Props {
  product: IProduct;
  handleToggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  isLiked: boolean;
}

const ProductLink = ({
  product,
  handleToggleLike,
  deleteProduct,
  isLiked,
}: Props) => {
  return (
    <>
      <NavLink
        className="grow inline-block mb-5"
        to={`/products/${product?.id}`}
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{product?.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product?.description}
        </p>
      </NavLink>
      <div className="bottom-3 right-3 flex gap-2 justify-end">
        <img
          onClick={() => handleToggleLike(product.id)}
          className={`${styles.icon} ${styles.heartIcon}`}
          src={isLiked ? brokenHeart : heart}
          alt=""
        />
        <img
          onClick={() => deleteProduct(product.id)}
          src={deleteIcon}
          className={`${styles.icon} ${styles.deleteIcon}`}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductLink;
