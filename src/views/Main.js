import React, {useState} from 'react';
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
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                    <img
                        className="Main__Image"
                        src="https://ssle.ulximg.com/image/1200x1200crop/cover/1596738570_d0552d3c8331c7777e7b0198836764cb.jpg/8c11d795fc8520bf5b5613ac436a4883/1596738570_af166936920cd2b3dd138759d3ce606b.jpg"/>
                </div>
            </div>
            <div>
                <div>Make the most out of Musion</div>
                <div>
                    <div>Manage your account</div>
                    <div>Start musion</div>
                    <div>Listen on the web</div>
                </div>
            </div>
        </div>
    );
}
export default Main;