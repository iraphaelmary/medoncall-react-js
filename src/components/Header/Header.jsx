import React, {useEffect, useRef} from 'react';
import './Header.scss';
import {init} from 'ityped';


const Header = () => {
    const typeRef = useRef();
    useEffect(() => {
        init(typeRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 40,
            strings: ['All in One App','Purchase Prescribed Drugs', 'Consult Healthcare Professionals']
        })
    }, [])

    return(
            <header>
                <section className='wrapper'>
                    <h1 className='title'><span ref={typeRef}></span></h1>
                    <p className='text'>Get connected with highly experienced medical health care practitioners at your own time. No waits, no commuting delays. Professionals anywhere,anytime</p><strong>How easy can that be!</strong>
                    <div className='buttons'>
                        <a href='##' noreferrer target='_self' className='btn'>Download Now</a>
                        <a href='##' noreferrer target='_self' className='btn'>Explore Features</a>
                    </div>
                </section> 
            </header>

            // {/* <section className='wrapper section'>
            //         <h1 className='title'><span ref={typeRef}></span></h1>
            //         <p className='text'>Get connected with highly experienced medical health care practitioners at your own time. No waits, no commuting delays. Professionals anywhere,anytime</p><strong>How easy can that be!</strong>
            //         <div className='buttons'>
            //             <a href='##' noreferrer target='_self' className='btn'>Download Now</a>
            //             <a href='##' noreferrer target='_self' className='btn'>Explore Features</a>
            //         </div>
            //     </section> */}
            
    )
};

export default Header;

 