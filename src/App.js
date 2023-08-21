import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cart/CartProvider';
import CartContainer from './componentes/CartWidget/CartContainer/CartContainer';
import { ToastContainer } from 'react-toastify';
import Checkout from './componentes/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <CartProvider >
          <NavBar />
          <Routes>
            <Route path='/cart' element={<CartContainer />} />  
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
