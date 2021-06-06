import './App.css';
import Container from './components/Container/Container';
import ModalDelete from './components/Modal/Modal-delete';

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p>Go start project Dashboard</p>
        </header>
        <ModalDelete></ModalDelete>
      </div>
    </Container>
  );
}

export default App;
