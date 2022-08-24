import ItemListContainer from './components/ItemListContainer';
import Nav from './components/Nav';
import ItemCount from './components/ItemCount';

function App() {
  const saludo = "Esto es un saludo"
  return (
    <>
    <Nav/>
    <ItemListContainer saludo={saludo}/>
    <ItemCount/>
    </>
  );
}

export default App;
