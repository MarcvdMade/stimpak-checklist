import React from 'react';
import './App.css';
import './styles/colors.css';

// Components
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Auth from "./Auth";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
        </Routes>
    </BrowserRouter>  );
}

export default App;
