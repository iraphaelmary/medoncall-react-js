import React from 'react';
import consultation3 from '../../assets/consultation3.png';
import './Services.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Services = () => {
    return(
        <>
            <div className='services'>
                <section className='wrapper'>
                    <h1 className='services-title'>Do more with MedOnCall</h1>
                    <div className='flex-row'>
                        <article>
                            <div className='item'>
                                <div>
                                    <h1 className='item-text'>Pick a service</h1>
                                    <FaLongArrowAltRight className='icon-item' />
                                </div>
                                <p>Choose a service to get professsional in specialized fields, whether General checkup, Emergency,Body and Nutrition,there is a consultant for it</p>
                            </div>
                            <div className='item'>
                                <div>
                                    <h1 className='item-text'>Connect Virtually</h1>
                                    <FaLongArrowAltRight className='icon-item' />
                                </div>
                                <p>Whatever means of communication you prefer-vedio calling, audio calling or texting is adequate. keep it in mind that all information divulged will be treated confidentially.</p>
                            </div>
                            <div className='item'>
                                <div>
                                    <h1 className='item-text'>Need medications</h1>
                                    <FaLongArrowAltRight className='icon-item' />
                                </div>
                                <p>We provide an online pharmacy where you order precribed medication. for quality assurance purpose we source our products directly from the manufacturer.</p>
                            </div>

                        </article>
                        <div className='right-flex'>
                            <img src={ consultation3 } alt='' className='mobile' />
                        </div>
                    </div>
                </section>
            </div>        
        </>
    )
};

export default Services;