export const calcTotalPrice2 = ({ title, price, count, option: { weight } }: {
  title: string,
  price: number;
  count: number;
  option: { weight: number };
}): string => {
  const totalWight: number = weight * count
  const totalPrice: number = price * count
  return `${title}: ${totalPrice} ${totalWight}`
}
