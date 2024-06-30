import { Modal } from "./Modal";
import { LargeProductListItem } from "./products/LargeProductListItem";

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Baseketball",
    price: "$10",
    description: "Just like pros use",
    rating: 3.2,
  },
  {
    name: "Running shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
