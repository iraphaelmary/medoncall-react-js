import React, {useState} from 'react';
import './Navbar.scss';
import Ellipse from '../../assets/Ellipse.svg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoIosArrowDown} from 'react-icons/io';
import {FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const toggle = () => setClick(!click);
    return (
            <nav>
                <div className='wrapper'>
                    <div className='logo-title'>
                        <h1>MedonCall</h1>
                        <ul>
                            <li><img src={Ellipse} alt='' /></li>
                            <li><img src={Ellipse} alt='' /></li>
                            <li><img src={Ellipse} alt='' /></li>
                        </ul>
                    </div>
                    <ul className={click ? 'menu active' : 'menu'}>
                        <li><a href='##' target='_self'>Features<IoIosArrowDown className='arrow icons' /></a>
                            <ul className='dropdown' >
                                <li><a href='##' target='_blank' rel='noreferrer'>Book Consultation</a></li>
                                <li><a href='##' target='_blank' rel='noopener noreferrer'>Book Drug Store</a></li>
                            </ul>
                        </li>
                        <li><a href='##' target='_self'>FAQ</a></li>
                        <li><a href='##' target='_self'>Contact</a></li>
                        <li><a href='##' target='_self' className='btn'>Get it Now</a></li>
                    </ul>
                    <div className='hamburger' onClick={toggle}>
                        {click ? <FaTimes className='icons' /> :<GiHamburgerMenu className='icons' /> }                      
                     </div>
                </div>
            </nav>
    )
};

export default Navbar;