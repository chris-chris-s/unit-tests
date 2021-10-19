import { Products } from '../products/types';
import { PlacedOrders, User, CartLine } from './types';
import * as faker from 'faker';
import { getRandomNumber, getRandomFromArray } from '../helpers';

const generateUser = (): User => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('0157########'),
    address: {
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      houseNumber: getRandomNumber(1, 90),
      country: faker.address.country(),
    },
  };
};

const generateCartlines = (products: Products): CartLine[] => {
  const cartLinesArray: CartLine[] = [];
  const randomProducts = getRandomFromArray(products, getRandomNumber(1, 10));
  randomProducts.forEach((product) => {
    const quantity = getRandomNumber(1, 10);
    cartLinesArray.push({
      productId: product.id,
      quantity: quantity,
      price: product.price,
      priceTotal: product.price * quantity,
    });
  });
  return cartLinesArray;
};

export const generatePlacedOrders = (
  products: Products,
  count: number
): PlacedOrders => {
  const orderArray: PlacedOrders = [];
  for (let index = 0; index < count; index++) {
    const cartLines = generateCartlines(products);
    orderArray.push({
      id: index + 1,
      created: faker.date.recent(60),
      user: generateUser(),
      cart: {
        cartLines: cartLines,
        cartTotal: cartLines.reduce(
          (acc, current) => acc + current.priceTotal,
          0
        ),
      },
    });
  }

  return orderArray;
};
