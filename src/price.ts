interface TotalPrice {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
}

const totalPrice = (props: TotalPrice): number | string => {
  const { price, discount, isInstallment, months } = props;

  if (price < 0) return "Цена должна быть положительной!";

  if (discount && (discount < 0 || discount > 100)) {
    return "Скидка не может быть меньше 0 и больше 100 процентов!";
  }

  const discountedPrice = price - price * ((discount || 0) / 100);

  const result =
    isInstallment && months && months > 0
      ? discountedPrice / months
      : discountedPrice;

  return Math.round(result);
};

const Product: TotalPrice = {
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
};

const price = totalPrice(Product);

console.log(price);
