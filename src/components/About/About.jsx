import React from 'react';
import './About.scss';
import consultation1 from '../../assets/consultation1.png';
import consultation2 from '../../assets/consultation2.png';
import consultation3 from '../../assets/consultation3.png';
import Vector11 from '../../assets/Vector11.svg';
import Vector10 from '../../assets/Vector10.svg';

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='wrapper'>
                    <h1 className='about-title'>It only gets better...</h1>
                    <div className='col-2'>
                        <div>
                            <h1>Flexible Health Plan</h1>
                            <p>we work within your budget offering you a variety of packages for you,your family and employees with the best of services included</p>
                        </div>
                        <div>
                            <h1>Covid compliant practices</h1>
                            <p>Concerned about covid,be rest assured; our doctorsare highly experienced to administer treatment, taking into all the required preventive measures when visiting our home.</p>
                        </div>
                    </div>
                    <div className='img-3'>
                        <div>
                            <img src={consultation1} alt='' className='consultation'  />
                        </div>
                            <img src={Vector11} className='arrow-vec' alt='' />
                        <div>
                            <img src={consultation2} alt='' className='consultation middle'  />
                        </div>
                            <img src={Vector10} className='arrow-vec' alt='' />
                        <div>
                            <img src={consultation3} alt='' className='consultation'  />
                        </div>
                    </div>
                    <div className='learn-more'>
                        <a href='##' target='_self' rel='noreferrer' className='btn'>Learn More About This</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;