import React, { useEffect, useState } from 'react';
import texture from '../../../../asset/Texture.png';
import background from '../../../../asset/Background.png'
import Logo from '../../../../asset/Logo.png'
import Card from './Card/Card';


const Pokemons_Query = `
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`


const HeroSec = () => {
    const [data, setdata] = useState([])


    useEffect(()=>{
        fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(
               {
                query: Pokemons_Query,
                variables: `{
                    "limit": 10
                  }`    
            }
                )
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setdata(data.data.pokemons.results)
        })
    },[]);


    return (
        <div className=" bg-center bg-no-repeat bg-cover min-w-[1921px]  min-h-[1080px] grid justify-center" style={{backgroundImage:`url(${background})`}}>
            <div className=" bg-center bg-no-repeat bg-cover min-h-[1080px]" style={{backgroundImage:`url(${texture})`}}>
                <div className='grid justify-center '>
                    <img className='mt-16' src={Logo} alt='Logo'/>
                </div>
                <div >
                    <Card data={data}></Card>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;