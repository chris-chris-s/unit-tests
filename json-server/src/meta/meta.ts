import { Meta } from './types';
import { Products, Category, Material, Color, Size } from '../products/types';
import { EnumHelpers } from '../helpers';

export const generateMeta = (products: Products): Meta => {
  return {
    categories: EnumHelpers.getNames(Category) as Category[],
    colors: EnumHelpers.getNames(Color) as Color[],
    materials: EnumHelpers.getNames(Material) as Material[],
    sizes: EnumHelpers.getNames(Size) as Size[],
    featuredCount: products.filter(x => x.featured).length,
    inStockCount: products.filter(x => x.inStock).length,
    notInStockCount: products.filter(x => !x.inStock).length,
    productCount: products.length,
  };
};
