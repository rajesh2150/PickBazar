import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBarComponents/NavBar';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import ProductFilterComponents from './components/pages/Product-Filter-Components';

function App() {
  const [category,setCategory] = useState('')
  return (
    <div className="App">
      
      <NavBar setCategory={setCategory}/>
      <Home/>
      <ProductFilterComponents setCategory={setCategory} category={category} />
    </div>
  );
}

export default App;
