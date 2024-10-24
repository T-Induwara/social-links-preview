import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ProfileIMG from '../assets/images/avatar-jessica.jpeg';

const Card = () => {
    return <div className="container-fluid d-flex flex-column app">
        <div className="row d-flex flex-column card">
            <div className="detail-wrapper d-flex flex-columnn justify-content-center">
                <img src={ProfileIMG} alt="Profile image" className="profile-img"/>
                <h1 className="profile-name">Jessica Randall</h1>
                <p classname="profile-location">London, United Kingdom</p>
            </div>
            <div className="tagline-wrapper">
                <p className="profile-tagline">"Front-end developer and avid reador."</p>
            </div>
            <div className="btn-wrapper d-flex flex-column">

            </div>
        </div>
    </div>
};

export default Card;