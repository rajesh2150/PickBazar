import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBarComponents/NavBar';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';

function App() {
  const [category,setCategory] = useState()
  return (
    <div className="App">
      
      <NavBar setCategory={setCategory}/>
      <Home/>
      <ProductList category={category} />
    </div>
  );
}

export default App;
