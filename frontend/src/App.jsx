import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/SignIn';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import SignUP from './pages/SignUP';


export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignUP />} />
    <Route path='/signin' element={<Login />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/about' element={<About />} />

  </Routes>
  </BrowserRouter>
}
