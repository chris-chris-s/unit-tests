import { Category, Color, Size, Material } from '../products/types';

export interface Meta {
  categories: Category[];
  colors: Color[];
  sizes: Size[];
  materials: Material[];
  productCount: number;
  inStockCount: number;
  notInStockCount: number;
  featuredCount: number;
}
