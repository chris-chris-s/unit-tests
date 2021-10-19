import { Review, Score } from './types';
import { getRandomNumber } from '../helpers';
import * as faker from 'faker';

const calculateAverageStars = (reviews: Review[]): number | null => {
  const acc = reviews.reduce((a, b) => a + b.stars, 0);
  if (!acc) return null;
  return parseFloat((acc / reviews.length).toFixed(1));
};

const generateReviews = (count: number): Review[] => {
  const reviews: Review[] = [];
  for (let is = 0; is < count; is++) {
    reviews.push({
      id: `rev-${is}`,
      name: faker.name.findName(),
      created: faker.date.past(1),
      stars: getRandomNumber(0, 5),
      comment: faker.lorem.sentences(getRandomNumber(1, 8)),
    });
  }
  return reviews;
};

export const generateScore = (
  minReviews: number = 0,
  maxReviews: number = 15
): Score => {
  const reviewCount = getRandomNumber(minReviews, maxReviews);
  const reviews = generateReviews(reviewCount);
  return {
    reviews: reviews,
    reviewsCount: reviewCount,
    averageStars: calculateAverageStars(reviews),
  };
};
