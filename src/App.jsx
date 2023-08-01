import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';


function App() {
  return (
    <>
      <header className='header'>
        <NavBar/>
      </header>
      <main className='main'>
        <ItemListContainer/>
      </main>
    </>
  )
}

export default App
