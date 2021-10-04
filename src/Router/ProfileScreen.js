import React from 'react';
import { useSelector } from 'react-redux';

import { Nav } from '../components/Nav';
import { PlansSubscription } from '../components/PlansSubscription';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import '../style/ProfileScreen.css';

export const ProfileScreen = () => {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar" />
                    <div className="profileScreen__details">
                        <h2>{ user.email }</h2>
                        <div className="proflieScreen__plans">
                            <h3>Plans</h3>
                            <PlansSubscription description={ "480p + 1 Screen" } cost={ 9.27 } >
                                Netflix Standard
                            </PlansSubscription>
                            <PlansSubscription description={  "1080p full HD + 2 Screen"} cost={ 13.92 }>
                                Netflix Basic
                            </PlansSubscription>
                            <PlansSubscription description={ "4K + HDR + 4 Screen" } cost={ 18.56 } >Netflix Premium
                            </PlansSubscription>
                            <button
                            onClick={ () => auth.signOut() } className="profileScreen__signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    // color={true}
}

