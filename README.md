# What Are Custom Hooks ?

- Special hooks that we define ourselves, and that usually combine the functionality of one or more existing React hooks like "useState" or "useEffect"

```js
const useProducts = () => {
  const [products, setProducts] = useState([]);

  // ... load the products

  return products;
};

const products = useProducts();
```

# Custom hooks are used for

Sharing complex behavior between multiple components (much like with HOCs and container components)

