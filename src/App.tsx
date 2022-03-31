import React from 'react';
import './App.css';
import "./styles/Buttons.css"
import "./styles/Spacing.css"
import './styles/colors.css';

// Components
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Auth from "./Pages/Auth";

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
