import React from 'react';
import './Pharmacy.scss';
import Vector13 from '../../assets/Vector13.svg';
import Condrugs from '../../assets/Condrugs.svg';
import drugs from '../../assets/drugs.svg';


const Pharmacy = () => {
    return(
        <>
            <div className='pharmacy'>
                <section className='wrapper'>
                    <div>
                    <h1 className='pharmacy-title'>Pharmacy? You have it on the same app?</h1>
                    <div className='pharm-cta'>
                        <a href='##' target='_blank' rel='noopener noreferrer' className='btn'>Read More</a>
                    </div>
                    </div>
                    <div className='row-3'>
                        <div className='row vector'>
                            <img src={Vector13} alt='' />
                        </div>
                        <div className='row'>
                            <img src={drugs} alt=''className='drugs-icons' />
                            <h1>Buy over the counter</h1>
                            <p>Buy regular medicine you'd get from the pharmacist without necessary prescriptions</p>
                        </div>
                        <div className='row'>
                            <img src={Condrugs} alt=''className='drugs-icons' />
                            <h1>Buy Prescription Drugs</h1>
                            <p>Get medicine precribed by your personal doctor or pharmacist on Medoncall or anywhere else</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Pharmacy;