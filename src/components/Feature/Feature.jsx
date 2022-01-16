import React from 'react';
import './Feature.scss';
import { RiMapPinLine } from 'react-icons/ri';
import { BiTachometer } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import Rectangle1 from '../../assets/Rectangle1.png';
import Vector9 from '../../assets/Vector9.svg';

const Feature = () => {
    return(
            <main>
                <section className='wrapper'>
                    <aside className='left' >
                        <img src={Vector9} alt='' className='vector-left' />
                        <img src={Rectangle1} alt='' className='img'/>
                    </aside>
                    <aside className='right'>
                        <div className='box'>
                            <div>
                                <BiTachometer className='marker' />
                            </div>
                            <h1 className='box-title'>Thousands of specialists at your disposal</h1>
                            <p className='box-text'>At Medoncall, we ensure that the best of practitioners attend to your request providing the highest quality of medical services for a quick and seamless recovery.</p>
                        </div>
                        <div className='box'>
                            <div>
                                <BsBell className='marker' />
                            </div>
                            <h1 className='box-title'>Cost - friendly prices.</h1>
                            <p className='box-text'>With our unique telemedicine solution, you do not have to break the bank to get top – notch medical consultations that enable you and your loved ones access all-inclusive and affordable healthcare services.</p>
                        </div>
                        <div className='box'>
                            <div>
                                <RiMapPinLine className='marker' />
                            </div>
                            <h1 className='box-title'>Scheduled Home Visits</h1>
                            <p className='box-text'>Even if you require physical attention, we will still come to you ensuring optimum convenience as promised.</p>
                        </div>
                    </aside>
                </section>
            </main>
        )
};

export default Feature;