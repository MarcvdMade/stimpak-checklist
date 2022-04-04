import React, {useEffect, useState} from 'react';
import './App.css';
import './styles/colors.css';
import { supabase } from './supabaseClient'

// Components
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Auth from "./Auth";
import {Session} from "@supabase/supabase-js";
import Account from "./Account";

function App() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

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
