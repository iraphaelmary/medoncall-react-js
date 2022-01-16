import React from 'react';
import './Blog.scss';
import Rectangle19 from '../../assets/Rectangle19.svg';
import Rectangle18 from '../../assets/Rectangle18.svg';
import Rectangle20 from '../../assets/Rectangle20.svg';
import Rectangle21 from '../../assets/Rectangle21.svg';

const Blog = () => {
    return (
        <div className='blog'>
            <section className='wrapper'>
                <h1 className='blog-title'>Stay ahead with the latest Health News</h1>
                <div className='log-4'>
                    <div className='b'>
                        <img src={Rectangle18} alt='' />
                    </div>
                    <div className='b'>
                        <h1 className='vaccine'>Vaccine</h1>
                        <img src={Rectangle19} alt='' />                       
                    </div>
                    <div className='b'>
                        <h1 className='break'>BREAK <br />THROUGH</h1>
                        <img src={Rectangle20} alt='' />
                    </div>
                    <div className='b'>
                        <h1 className='research'>RESEARCH</h1>
                        <img src={Rectangle21} alt='' />
                    </div>
                </div>
            </section>           
        </div>
    )
};

export default Blog;
