import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import StudentLoginForm from './components/StudentLoginForm'
import StaffLoginForm from './components/StaffLoginForm'
import Dashboard from './screens/Dashboard';
import UserInfoGrid from './components/UserInfoGrid';
import Checkout from './screens/CheckOut';
import { useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Router>
      <Header />
      <Container>
        {isAdmin ?
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user-info' element={<UserInfoGrid />} />
          </Routes> :
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login/student' element={<StudentLoginForm />} />
            <Route path='/login/staff' element={<StaffLoginForm />} />
            <Route path='/request-form' element={<Checkout />} />
          </Routes>
        }

      </Container>
    </Router>
  );
}

export default App;
