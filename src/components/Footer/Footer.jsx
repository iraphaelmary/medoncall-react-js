import React from 'react';
import './Footer.scss';
import Ellipse from '../../assets/Ellipse.svg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <section className='wrapper'>  
                <div className='sum'>
                    <div className='logo-title'>
                        <h1>MedonCall</h1>
                            <ul>
                                <li><img src={Ellipse} alt='' /></li>
                                <li><img src={Ellipse} alt='' /></li>
                                <li><img src={Ellipse} alt='' /></li>
                            </ul>
                    </div> 
                        <p><span>Address: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non arcu condimentum sed id tempusmagnis amet, sagittis semper.</p>
                        <p><span>Email Address: </span>info@medoncall.com</p>
                </div>                   
                <div className='ft'>
                    <div>
                        <h2>COMPANY</h2>
                        <ul>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>Pricing</a></li>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>About Us</a></li>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>Privacy Policy</a></li>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>Terms of Use</a></li> 
                        </ul>
                    </div>
                    <div>
                        <h2>FEATURES</h2>
                        <ul>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>Drug Store</a></li>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>Book Consultation</a></li> 
                        </ul>
                    </div>
                    <div>
                        <h2>HELP</h2>
                        <ul>
                            <li><a href='##' target='_blank' rel='noopener noreferrer'>FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='credit'>
                    <div>
                        <p>(c)Copy 2021 | All Rights Reserved | Medoncall</p>
                    </div>
                    <div>
                        <p>Made with ❤️ by <span>Apptide Technologies</span></p>
                    </div>
                    <div>
                        <FaFacebook className='social'/>
                        <FaTwitter className='social'/>
                        <FaInstagram className='social'/>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;
