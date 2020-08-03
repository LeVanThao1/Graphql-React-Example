import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON } from '../graphql/get-pokemon'
import Pokemon from '../components/Pokemon';

function PokemonContainer(props) {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMON, {
        variables: { first : 9 }
    })
    return (
        <div className="container">
            {
                pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
            }
        </div>
    )
}

export default PokemonContainer;