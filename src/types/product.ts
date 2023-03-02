export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  videoId: string;
  hashtags: string[];
  image: string;
  description: string;
  ratings: number;
  reviews: number;
  slug: string;
  stock: number;
};

export type ProductCard = {
  id: number;
  productName: string;
  brand: string;
  videoId: string;
  image: string;
  ratings: number;
  price: number;
  reviews: number;
  slug: string;
  hashtags: string[];
  stock: number;
};
