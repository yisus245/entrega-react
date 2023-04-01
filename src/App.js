import "./App.css";
import ItemList from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import CartWidget from "./Components/CardWidget/CardWidget";

function App() {
  let saludo = "Hola Mundo";
  return (
    <div className="App">
      <Navbar color="red" />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
