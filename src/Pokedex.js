import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = {
            counter: 0,
        }

        this.showNextPokemon = this.showNextPokemon.bind(this)
    }

    showNextPokemon() {
        this.setState((prevState, props) => (prevState.counter < props.pokemons.length - 1 ? 
            { counter: prevState.counter + 1 } : 
            { counter: 0 }
        ))
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons
                    .filter((_pokemon, index) => this.state.counter === index )
                    .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <button className="btn-next" onClick={this.showNextPokemon}>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;