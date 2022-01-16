import React from 'react';
import Applestore from '../../assets/Applestore.svg';
import googleplay from '../../assets/googleplay.svg';
import './AppDownload.scss';

const AppDownload = () => {
    return (
        <div className='download'>
            <section className='wrapper'>
                <h1 className='download-title'>Get it on App Store</h1>
                <div className='social'>
                    <a href='##' target='_blank' rel='noreferrer noopener'>
                        <img src={Applestore} alt='' className='link' />
                    </a> 
                    <a href='##' target='_blank' rel='noreferrer noopener'>
                        <img src={googleplay} alt='' className='link' />
                    </a>                    
                </div>
            </section>
        </div>
    )
}

export default AppDownload
