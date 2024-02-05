const car : {
  brand: string;
  rating: [string, string][];
} = {
  brand: 'Lexus',
  // model: 'GX550',
  // generation: 'III',
  // country: 'Japan',
  // price: 60_000,
  // color: 'white',
  rating: [
    ['performance', '9.0'],
    ['comfort', '8.8'],
    ['interior', '8.9'],
    ['technology', '9.3'],
    ['storage', '9.0'],
    ['fuelEconomy', '6.4'],
    ['value', '8.5'],
    ['wildcard', '8.7'],
  ],

};

const totalVerdict = (car: {
  brand: string;
  rating: [string, string][];
}) => {
  const sumRating = car.rating.reduce((acc, item) => {
    console.log(acc, item);

    return Number(item[1]) + acc;
  }, 0);
  const verdict = sumRating / car.rating.length;
  return verdict;
};

export const carResult = totalVerdict(car);