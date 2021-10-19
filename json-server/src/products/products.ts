import { Products, Category, Color, Size, Material, Product } from './types';
import * as faker from 'faker';
import {
  capitalize,
  getRandomFromArray,
  getRandomNumber,
  EnumHelpers,
  shuffleArray,
} from '../helpers';
import { dbImageIds } from '../db_images';
import { generateScore } from './reviews';

const generatePrice = (): number => {
  const randomPrice = getRandomNumber(10, 100);
  const decimals = ['05', '10', '50', '74', '99'];
  if (getRandomNumber(1, 4) === 1)
    return parseInt(
      randomPrice.toString() + getRandomFromArray(decimals, 1)[0]
    );
  return parseInt(
    randomPrice.toString().substr(0, randomPrice.toString().length) + '00'
  );
};

const randomPhrases = ['T-Shirt', 'Shirt', 'Polo', 'Swagger'];

export const generateProducts = (productCount: number): Products => {
  const productArray: Products = [];
  const dbImages = shuffleArray(dbImageIds);

  for (let index = 0; index < productCount; index++) {
    const newProduct: Product = {
      id: faker.random.uuid(),
      productName: `${capitalize(faker.random.word())} ${
        getRandomFromArray(randomPhrases, 1)[0]
      }`,
      price: generatePrice(),
      categories: getRandomFromArray(
        EnumHelpers.getNames(Category),
        4
      ) as Category[],
      colors: getRandomFromArray(EnumHelpers.getNames(Color), 4) as Color[],
      sizes: getRandomFromArray(EnumHelpers.getNames(Size)) as Size[],
      materials: getRandomFromArray(
        EnumHelpers.getNames(Material),
        2
      ) as Material[],
      description: faker.lorem.paragraphs(getRandomNumber(1, 5), ' '),
      company: faker.company.companyName(),
      companySlogan: faker.company.catchPhrase(),
      featured: index < getRandomNumber(5, 12) ? true : false,
      inStock: index > 12 && index < getRandomNumber(20, 35) ? false : true,
      created: faker.date.past(2),
      image: {
        unsplashId: dbImages[index],
        banner: `https://source.unsplash.com/${dbImages[index]}/1200x500`,
        xl: `https://source.unsplash.com/${dbImages[index]}/1080x800`,
        md: `https://source.unsplash.com/${dbImages[index]}/600x400`,
        sm: `https://source.unsplash.com/${dbImages[index]}/200x200`,
      },
      score: generateScore(),
    };
    productArray.push(newProduct);
  }

  return productArray;
};
