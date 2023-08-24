import { getRandomElement } from './utils';
import { CITIES, DESCRIPTION } from '../const';

const mockDestination = [
  {
    id: 1,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  },
  {
    id: 2,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  },
  {
    id: 3,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  },
  {
    id: 4,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  },
  {
    id: 5,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  },
  {
    id: 6,
    name: getRandomElement(CITIES),
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${getRandomElement(CITIES)} description`
      }
    ]
  }
];

export { mockDestination };