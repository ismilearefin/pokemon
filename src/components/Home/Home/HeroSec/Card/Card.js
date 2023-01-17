import './Card.css';

const Card = ({data}) => {
    console.log(data)
    return (
        <div className='grid grid-cols-5 gap-20 mt-24'>
            {
                        data.map((pokemon,i) => (
                          <div key={i} className="pokemonCard rounded-md bg-center bg-no-repeat bg-cover w-[235px] min-h-[300px]  ">
                         <div className=''>
                         <div className='bg-[#F2F2F2] m-2.5 rounded-lg' >
                          <img className='w-[215px] hover:scale-110 transition duration-300 ease-in-out' src={pokemon?.image} alt="pokemon"/>
                            </div>
                          <h1 className='m-2.5 text-left font-bold font-[Ubuntu-Regular] text-base'>{pokemon.name}</h1>
                          </div>
                         </div>

                        ))
                    }
        </div>
    );
};

export default Card;