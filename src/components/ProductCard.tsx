import type { Product } from "../pages/interface/Product";

type Props = {
  products: Product[];
  heading: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const ProductCardList = ({ products, heading, onEdit, onDelete }: Props) => {
  const Heading = ({ h }: { h: string }) => {
    return <h1>{h}</h1>;
  };

  return (
    <>
      <Heading h={heading} />

      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="details">
            <h2>
              {product.id}. <span>{product.name}</span>
            </h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
          </div>

          {product.image && (
            <div className="image">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: 140, height: 140, objectFit: "cover" }}
              />
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="button" onClick={() => onEdit(product.id)}>
              Edit
            </button>
            <button type="button" onClick={() => onDelete(product.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardList;
