import React from 'react';
import Brush from '../../../../asset/Brush.png';
import left from '../../../../asset/Left.png';
import right from '../../../../asset/right.png';
import image1 from '../../../../asset/Image01.png';
import image2 from '../../../../asset/Image02.png';
import image3 from '../../../../asset/Image03.png';
import image4 from '../../../../asset/Image04.png';
import image5 from '../../../../asset/Image05.png';

const AboutSec = () => {
    return (
        <div className='static'>
            <img className='absolute left-0' src={left} alt='left side design' />
            <img className='absolute right-[0px]' src={right} alt='right side design' />
           <div className='grid justify-center '>
            <div className='bg-center bg-no-repeat  mt-[107px] mb-[68px]' style={{backgroundImage:`url(${Brush})`}}>
                <p className='font-[Ubuntu-Bold] leading-[48px] text-center font-bold text-5xl text-[#257BC4]'>Ash & Pikachu Arrive in <br/> Pokémon Universe</p>
            </div>

            <div className='w-[1546px]'>
                <div className=''>
                    <div className='grid grid-cols-3 '>
                    <img className='row-span-3 mt-10px' src={image1} alt='image01'/>
                    <img className='col-span-1' src={image2} alt='image02'/>
                    <img className='row-span-2' src={image3} alt='image03'/>
                    <img className='' src={image4} alt='image04'/>
                    <img className='' src={image5} alt='image05'/>
                    </div>
                </div>
            </div>






           </div>
        </div>
    );
};

export default AboutSec;