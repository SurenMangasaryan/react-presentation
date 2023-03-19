import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Container from './Conmponents/Container/Container';
import ContextAutho from './ContextAutho';
import ContextHomePage from './ContextHomePage';

function App() {
  return (
    <BrowserRouter>
      <ContextAutho>
        <ContextHomePage>
          <Container />
        </ContextHomePage>
      </ContextAutho>
    </BrowserRouter>
  );
}

export default App;
