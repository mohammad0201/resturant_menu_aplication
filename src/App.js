import React from 'react';
import Home from 'pages/Home/Home';
import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/Home/Cart/Cart';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="*"
                        element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </div>




    );
}

export default App;
