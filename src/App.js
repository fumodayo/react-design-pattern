import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      {/* <UserInfo /> */}
      <UserInfo userId="123" />
      {/* <UserInfo userId="234" />
      <UserInfo userId="567" /> */}
      <ProductInfo productId="8901" />
    </>
  );
}

export default App;
