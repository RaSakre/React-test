export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isLiked?: boolean;
}

export interface IProducts {
  products: IProduct[];
}

export interface IProductState {
  isLoading: boolean;
  likedIds: number[];
  createdProducts: IProduct[],
  deletedIds: number[];
}

