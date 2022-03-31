import {useEffect, useState} from 'react'
import { supabase } from './supabaseClient'
import {Session} from "@supabase/supabase-js";

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    const handleSignOut = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signOut()
        if (error) {
            alert(error.message);
        }
        setLoading(false)
        setSession(null);
    }

    const handleSignUp = async () => {
        setLoading(true)
        const { user, session, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        }
        else {
            setSession(session);
        }
        setLoading(false)
    }

    const handleSignIn = async () => {
        setLoading(true)
        const { user, session, error } = await supabase.auth.signIn({
            email,
            password
        });
        if (error) {
            alert(error.message);
        }
        else {
            setSession(session);
        }
        setLoading(false)
    }

    return (
        <div>
            {session ?
                <button onClick={handleSignOut}>log out</button> :
                <div>
                    <h1 className="header">Supabase + React</h1>
                    <p className="description">Sign in via magic link with your email below</p>
                    {loading ? (
                        'Loading'
                    ) : (
                        <div>
                            <form onSubmit={handleSignUp}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="inputField"
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    id="password"
                                    className="inputField"
                                    type="password"
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className="button block" aria-live="polite">
                                    Sign in
                                </button>
                            </form>
                            <form onSubmit={handleSignIn}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email2"
                                    className="inputField"
                                    type="email"
                                    placeholder="Your email"
                                    value={email2}
                                    onChange={(e) => setEmail2(e.target.value)}
                                />
                                <input
                                    id="password2"
                                    className="inputField"
                                    type="password"
                                    placeholder="Your password"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                                <button className="button block" aria-live="polite">
                                    Log in
                                </button>
                            </form>
                        </div>
                    )}
                </div>
                }
        </div>
    )
}

