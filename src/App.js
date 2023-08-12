import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;