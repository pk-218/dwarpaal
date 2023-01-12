import './bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />

        </Routes>

      </Container>
    </Router>
  );
}

export default App;
