import gql from 'graphql-tag'

export const GET_POKEMON = gql`
    query pokemon($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`