
import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Happy Meals App</p>
            <div className="app-download-platforms">
                <img 
                    src={assets.play_store} 
                    alt="Play Store" 
                    title="Sorry, the app is not available yet" 
                />
                <img 
                    src={assets.app_store} 
                    alt="App Store" 
                    title="Sorry, the app is not available yet" 
                />
            </div>
        </div>
    );
}

export default AppDownload;

