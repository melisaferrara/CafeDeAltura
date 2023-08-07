import "./App.css";
import CoffeeContextProvider from "./CoffeeContext/CoffeeContext";
import Nav from "./Components/Nav";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CoffeeContextProvider>
    </>
  );
}

export default App;
