import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= '/' element ={<ItemListContainer greeting={"Bienvenidos"} />} />
      <Route path= '/category/:categoryId' element ={<ItemListContainer/>} />
      <Route path= '/item/:itemId' element ={<ItemDetailContainer/>} />
      <Route path= '*' element={<h1>NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
