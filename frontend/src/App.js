import './bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import StudentLoginForm from './components/StudentLoginForm'
import StaffLoginForm from './components/StaffLoginForm'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login/student' element={<StudentLoginForm />} />
          <Route path='/login/staff' element={<StaffLoginForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
