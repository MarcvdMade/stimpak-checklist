import {useEffect, useState} from 'react'
import { supabase } from '../supabaseClient'
import {Session} from "@supabase/supabase-js";
import '../styles/Auth.css';
import Logo from '../img/logo.png';
import { userInfo } from 'os';

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [session, setSession] = useState<Session | null>(null)
    const [register, setRegister] = useState(false);

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    })

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
            email: email2,
            password: password2
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
        <div className='auth-page'>
            {session ?
                <div>
                    <p>Ingelogd als {session.user?.email}</p>
                    <button className='logout-btn' onClick={handleSignOut}>Uitloggen</button>
                </div> :
                <div>
                    {loading ? (
                        'Loading'
                    ) : (
                        <div className='auth-wrapper'>
                            {
                                register ? (
                                    <form onSubmit={handleSignUp}>
                                        <img className='form-logo' src={Logo} />
                                        <label htmlFor="email">Registreren</label>
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
                                            Registreren
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleSignIn}>
                                        <img className='form-logo' src={Logo} />
                                        <label htmlFor="email">Inloggen</label>
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
                                            Inloggen
                                        </button>
                                    </form>
                                )
                            }
                            <div>
                                {
                                    register ? (
                                        <button onClick={() => setRegister(false)} className='switch-btn'>Ga naar inloggen</button>
                                    ) : (
                                        <button onClick={() => setRegister(true)} className='switch-btn'>Ga naar registreren</button>
                                    )
                                }
                            </div>
                        </div>
                    )}
                </div>
                }
        </div>
    )
}

