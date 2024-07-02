import { useResource } from "./useResource";

export const ProductInfo = ({ productId }) => {
  const product = useResource(`/products/${productId}`);

  const { name, price, description, rating } = product || {};

  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Average rating: {rating}</p>
    </>
  );
};
