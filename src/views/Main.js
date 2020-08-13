import React from 'react';
import '../styles/Main.css';

function Main() {
    return (
        <div>
            <div className="Main__Header">
                <div className="Main__TextWrapper">
                    <div className="Main__HeaderTitle">
                        Looking for music mix?
                    </div>
                    <div className="Main__HeaderSubTitle">Start listening to the best mixes on your terms</div>
                    <button className="Main__Button">Signup</button>
                </div>
                <div className="Main__ImageGroup">
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://upload.wikimedia.org/wikipedia/en/6/68/AV%C4%AACI_%2801%29.jpg"/>
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://upload.wikimedia.org/wikipedia/en/1/1b/Hakan_Hellstrom_-_tva_steg_fran_paradise.jpg"/>
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://e.snmc.io/i/600/w/e983b8ddcd56a0081c1ae496303d4d4c/2865947"/>
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://images-na.ssl-images-amazon.com/images/I/71iMVBsItRL._SL1400_.jpg"/>
                    <img
                        alt="Album cover"
                        className="Main__Image"
                        src="https://images-na.ssl-images-amazon.com/images/I/81Cb1JymvaL._AC_SL1425_.jpg"/>
                </div>
            </div>
            <div className="Main__Body">
                <div className="Main__BodySubHeader">Make the most out of Musion</div>
                <div className="Main__BodySub">
                    <div>
                        <div className="Main__BodyCaptionHeader">Manage your account</div>
                        <div>Edit your profile, change your password, and update your payment information.</div>
                    </div>
                    <div>
                        <div className="Main__BodyCaptionHeader">Start musing</div>
                        <div>At the party, choose one artist each and start the musion</div>
                    </div>
                    <div>
                        <div className="Main__BodyCaptionHeader">Listen on the web</div>
                        <div>Signup or login and get going directly in your browser</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;