import "./ProductImg.css";

function ProductImage({ photo, name }) {
  return (
    <figure className="ProductImg">
      <img src={photo} alt={name} />
      <figcaption aria-label={name} />
    </figure>
  );
}

export default ProductImage;
