export type PlacedOrders = PlacedOrder[];

export interface PlacedOrder {
  id: number;
  created: Date;
  user: User;
  cart: Cart;
}

export interface Cart {
  cartLines: CartLine[];
  cartTotal: number;
}

export interface CartLine {
  productId: string;
  quantity: number;
  price: number;
  priceTotal: number;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  zipCode: string;
  houseNumber: number;
  country: string;
}
