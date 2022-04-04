import {useState, useEffect, FormEvent, ReactElement} from 'react'
import { supabase } from './supabaseClient'
import {Session, User} from "@supabase/supabase-js";
import {useNavigate} from "react-router-dom";

const Account = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [session, setSession] = useState<Session | null>(null)

    const navToAuth = useNavigate();

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    useEffect(() => {
        setLoading(false)
    }, [session]);

    if (!session) navToAuth('/auth', { replace: true });

    return (
        <div aria-live="polite">
            {(!session || loading) ? (
                <div>Loading ...</div>
                ) :
                <button type="button" className="button block" onClick={() => supabase.auth.signOut()}>
                Sign Out
                </button>
            }
        </div>
    );
}

export default Account