export type Products = Product[];

export interface Product {
  id: string;
  productName: string;
  price: number;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
  materials: Material[];
  description: string;
  company: string;
  companySlogan: string;
  featured: boolean;
  inStock: boolean;
  created: Date;
  image: Image;
  score: Score;
}

export enum Category {
  Business = "Business",
  BusinessCasual = "Business Casual",
  Chic = "Chic",
  Frühling = "Frühling",
  Herbst = "Herbst",
  Lässig = "Lässig",
  Sommer = "Sommer",
  Winter = "Winter",
}

export enum Color {
  blue = "blue",
  yellow = "yellow",
  green = "green",
  pink = "pink",
  red = "red",
  black = "black",
  white = "white",
}

export interface Image {
  unsplashId: string;
  banner: string;
  xl: string;
  md: string;
  sm: string;
}

export enum Material {
  Kunstseide = "Kunstseide",
  Leinen = "Leinen",
  Polyester = "Polyester",
  Seide = "Seide",
  Wolle = "Wolle",
}

export interface Score {
  reviews: Review[];
  reviewsCount: number;
  averageStars: number | null;
}

export interface Review {
  id: string;
  name: string;
  created: Date;
  stars: number;
  comment: string;
}

export enum Size {
  L = "L",
  M = "M",
  S = "S",
  Xl = "XL",
  Xs = "XS",
}
