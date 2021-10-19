import { generateProducts } from './products/products';
import { Products } from './products/types';
import { PlacedOrders } from './placedOrders/types';
import { Meta } from './meta/types';
import { generateMeta } from './meta/meta';
import { generatePlacedOrders } from './placedOrders/placedOrders';
import { getRandomNumber } from './helpers';

const PRODUCT_COUNT_MIN = 70;
const PRODUCT_COUNT_MAX = 110;

const ORDER_COUNT_MIN = 0;
const ORDER_COUNT_MAX = 15;

module.exports = () => {
  const products: Products = generateProducts(
    getRandomNumber(PRODUCT_COUNT_MIN, PRODUCT_COUNT_MAX)
  );
  const meta: Meta = generateMeta(products);
  const placedOrders: PlacedOrders = generatePlacedOrders(
    products,
    getRandomNumber(ORDER_COUNT_MIN, ORDER_COUNT_MAX)
  );

  return {
    products,
    meta,
    placedOrders,
  };
};
