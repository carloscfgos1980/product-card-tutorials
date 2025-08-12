import ProductCard from "./components/ProductCard.jsx";

const sampleProduct = {
  image: "https://fastly.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18",
  name: "Sample Product",
  price: "29.99",
  variants: ["Small", "Medium", "Large"],
  inStock: true, // set to false to test "Out of Stock"
};

function App() {
  return (
    <div>
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;