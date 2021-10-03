import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import '../style/Nav.css';


export const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () =>{
        if(window.scrollY >100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () =>window.removeEventListener("scroll",transitionNavBar);
    },[]);

    return (
        <div className={`nav ${ show && `nav__black` } `}>
            <div className="nav__contents">
                <img
                onClick={() => history.push("/")}
                className="nav__logo"
                src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="netflix-logo" />

                <img
                onClick={() => history.push("/profile")}
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar" />
            </div>
        </div>
    )
}
