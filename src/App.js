

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
// import Slider from './Component/Slider';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ShoppingCartProvider from './context/ShoppingCartContext';
import Regester from './pages/Regester';
import Login from './pages/Login';
// import Category from './Component/Category'
// import Newletter from './Component/Newletter'
// import UpdatedNewletter from './Component/UpdatedNewletter';
// import Footer from './Component/Footer';
function App() {
  return (
    <ShoppingCartProvider>
 <div className="App">
     
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/productList' element={<ProductList/>}/>
       <Route path='/regester' element={<Regester/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
     
     
   </div>
    </ShoppingCartProvider>
   
  );
}

export default App;
