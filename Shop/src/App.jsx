import DefaultPage from "./Page/DefaultPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import CartList from "./Components/Cart/CartList";
import ProductDetail from "./Components/Product/ProductDetail";
import ThankYou from "./Components/ThankYou/ThankYou";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/gio-hang" element={<CartList />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/chi-tiet-san-pham/:productId"
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
