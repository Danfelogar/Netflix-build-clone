import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { HomeScreen } from './Router/HomeScreen';
import { LoginScreen } from './Router/LoginScreen';
import { PaypalScreen } from './Router/PaypalScreen';
import { ProfileScreen } from './Router/ProfileScreen';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return console.log("good job daniel 🥳");
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ?(
          <LoginScreen />
        ): (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/checkout">
            <PaypalScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>

    </div>
  );
}

export default App;
