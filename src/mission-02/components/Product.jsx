import contactData from "../Data/product.json";
import ProductImg from "./ProductImg";

function Product() {
  const items = contactData.items.map((item) => {
    return item;
  });

  return (
    <ul className="flex justify-between m-auto mt-5 w-[1050px]">
      {items.map(({ id, brand, name, label, price, photo, limit }) => {
        const photoUrl = `/images/product/${photo}.png`;

        return (
          <li key={id}>
            <a
              href="/src/pages/detail/#${id}"
              className="flex flex-col gap-1 mb-2"
            >
              <div className="image-container">
                <ProductImg photo={photoUrl} />
              </div>
              <p className="text-xs">미래배송</p>
              <p className="name">
                [{brand}] {name}
              </p>
              <p>{price}원</p>
              <p className="text-xs">{label}</p>
            </a>
            <span className="text-xs rounded-md bg-gray-200 p-1">{limit}</span>
          </li>
        );
      })}
    </ul>
  );
}
export default Product;
