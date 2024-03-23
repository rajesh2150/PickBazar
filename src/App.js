import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBarComponents/NavBar";
import Home from "./components/pages/Home";
import ProductList from "./components/pages/ProductList";
import ProductFilterComponents from "./components/pages/Product-Filter-Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/pages/ProductDetails";
function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar setCategory={setCategory} />
                <Home />
                <ProductFilterComponents
                  setCategory={setCategory}
                  category={category}
                />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
