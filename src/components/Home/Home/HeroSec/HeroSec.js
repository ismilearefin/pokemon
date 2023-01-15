import React, { useEffect, useState } from 'react';
import texture from '../../../../asset/Texture.png';
import background from '../../../../asset/Background.png'
import Logo from '../../../../asset/Logo.png'


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
const Ability_Query = `
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
      message
      status
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
                query: Ability_Query,
                variables: `{
                    "name": "bulbasaur"
                  }`    
            }
                )
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            // setdata(data.data.pokemons.results)
        })
    },[]);


    return (
        <div className="hero min-h-screen bg-center bg-no-repeat bg-cover max-h-[1080px]" style={{backgroundImage:`url(${background})`}}>
            <div className="hero min-h-screen bg-center bg-no-repeat bg-cover max-h-[1080px]" style={{backgroundImage:`url(${texture})`}}>
                <div className='grid justify-center '>
                    <img className='mt-16' src={Logo} alt='Logo'/>
                </div>
                <div>
                    {
                        data.map((pokemon,i) => <h1 key={i}>{pokemon.name}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroSec;