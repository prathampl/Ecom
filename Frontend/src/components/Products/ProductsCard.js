// src/components/Products/ProductCard.js
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
      <button
        onClick={addToCart}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};
