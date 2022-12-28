
import './App.css';
import Signup from './components/signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Protected_Route from './components/Protected_route/Protected_Route';
import Homepage from './components/blog/Homepage';
import Create from './components/blog/create/Create';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<Protected_Route />}>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/create' element={<Create />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
