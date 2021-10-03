import React, { useState } from 'react';

import '../style/LoginScreen.css';
import { SignupScreen } from './SignupScreen';

export const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                className="loginScreen__logo"
                src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix-logo"/>
                <button className="loginScreen__button"
                onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>
                <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen__body">
                {
                    signIn ? (
                        <SignupScreen />
                    )
                    : (
                        <>
                            <h1>Unlimited films, TV programmes and more</h1>
                            <h2>Watch anywhere.Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email  to  create   or restart your membership</h3>

                            <div className="loginScreen__input">
                                <form>
                                    <input type="email"
                                        placeholder="Email Address"
                                    />
                                    <button
                                    onClick={() => setSignIn(true)}
                                    className="loginScreen__getStarted">GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}


// https://genotipia.com/mi_content/uploads/2020/04/Netflix-Background-prueba-1.jpg" alt="login-background"