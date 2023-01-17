import React from 'react';
import Carousel from 'react-multi-carousel';
import './MobileCard.css';
import "react-multi-carousel/lib/styles.css";

const MobileCard = ({data}) => {
    console.log(data)
    const responsive = {
        mobile: {
          breakpoint: { max: 490, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
    return (
        <Carousel 
        className='grid justify-center my-10' 
        responsive={responsive} 
        removeArrowOnDeviceType={["mobile"]}
        >
            {
              data?.map((pokemon,i) => (
                          <div key={i} className="pokemonCard rounded-md w-[235px] min-h-[300px] ">
                         <div className=''>
                         <div className='bg-[#F2F2F2] m-2.5 rounded-lg' >
                          <img className='w-[215px] hover:scale-110 transition duration-300 ease-in-out' src={pokemon?.image} alt="pokemon"/>
                            </div>
                          <h1 className='m-2.5 text-left font-bold font-[Ubuntu-Regular] text-base'>{pokemon.name}</h1>
                          </div>
                         </div>

                        ))
                      }
       
        </Carousel>

    );
};

export default MobileCard;