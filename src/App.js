import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Routes
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

import About from './pages/About';
import Home from './pages/Home';

import VansList from './pages/VansList';
import VanDetail from './pages/VanDetail';

import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';

import "./server"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/vans"} element={<VansList />} />
                    <Route path={"/vans/:id"} element={<VanDetail />} />
                    <Route path={"host"} element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path={"income"} element={<Income />} />
                        <Route path={"reviews"} element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;