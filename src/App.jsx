import { useState } from "react";
import "./App.scss";
import data from "./assets/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(data.menu);
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route
            path="/cart"
            element={<Cart menu={menu} cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
