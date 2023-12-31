const CITIES = [
  'New York',
  'Tokyo',
  'Paris',
  'London',
  'Sydney',
  'Moscow',
  'Istanbul',
  'Mumbai',
  'Cairo',
  'Beijing',
  'Rome',
  'Geneva',
];

const DESCRIPTION = [
  'The mysterious forest was bathed in moonlight, casting long shadows among the ancient trees',
  'As the sun dipped below the horizon, the city came alive with the glow of neon lights and the sounds of laughte',
  'The aroma of freshly baked bread filled the air as I stepped into the cozy bakery on the corner',
  'The waves crashed against the rocky shoreline, creating a soothing melody that echoed through the coastal town',
  'In the heart of the bustling market, I stumbled upon a hidden gem—a quaint bookstore overflowing with old books and dusty shelves',
  'A gentle breeze rustled the leaves in the park, where families picnicked and children played',
  'The city skyline was a mesmerizing sea of skyscrapers, each one reaching for the heavens',
  'I gazed up at the starry night sky, feeling small and insignificant in the vastness of the universe',
  'The rain tapped softly on the windowpane, providing a comforting backdrop to a cozy evening indoors',
  'Amidst the chaos of the carnival, the carousel spun with colorful lights and laughter-filled music'
];

const TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Check-in',
  'Sightseeing',
  'Restaurant',
  'Flight'
];

const COUNT_POINT = 5;

const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const SortTypes = {
  DEFAULT: 'default',
  PRICE: 'price',
  TIME: 'time',
};

const adaptToClient = (point) => {
  const adaptedPoint = {
    ...point,
    dateFrom: point['date_from'],
    dateTo: point['date_to'],
    basePrice: point['base_price'],
    isFavorite: point['is_favorite'],
  };

  delete adaptedPoint['date_from'];
  delete adaptedPoint['date_to'];
  delete adaptedPoint['base_price'];
  delete adaptedPoint['is_favorite'];

  return adaptedPoint;
};

const adaptToServer = (point) => {
  const adaptedPoint = {
    ...point,
    ['date_from']: new Date(point.dateFrom).toISOString(),
    ['date_to']: new Date(point.dateTo).toISOString(),
    ['base_price']: point.basePrice,
    ['is_favorite']: point.isFavorite,
  };

  delete adaptedPoint.dateFrom;
  delete adaptedPoint.dateTo;
  delete adaptedPoint.basePrice;
  delete adaptedPoint.isFavorite;

  return adaptedPoint;
};

export { CITIES, DESCRIPTION, TYPES, COUNT_POINT, SortTypes, FilterTypes, UpdateType, UserAction, adaptToClient, adaptToServer };
