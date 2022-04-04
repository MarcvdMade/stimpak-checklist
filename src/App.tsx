import React from 'react';
import './App.css';
import "./styles/Buttons.css"
import "./styles/Spacing.css"
import './styles/colors.css';

// Components
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Auth from "./Pages/Auth";
import NavBar from "./components/NavBar";
import Account from "./Pages/Account";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="account" element={<Account />} />
        </Routes>
    </BrowserRouter>  );
}

export default App;
