import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';




function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
