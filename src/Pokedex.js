import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = {
            counter: 0,
            type: 'Fire',
        }

        this.showNextPokemon = this.showNextPokemon.bind(this)
        this.filterByType = this.filterByType.bind(this)
    }

    showNextPokemon() {
        this.setState((prevState, props) => (prevState.counter < props.pokemons
                .filter((pokemon) => pokemon.type === this.state.type).length - 1 ? 
            { counter: prevState.counter + 1 } : 
            { counter: 0 }
        ))
    }

    filterByType(event) {
        this.setState({
            type: event.target.value,
        })
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons
                    .filter((pokemon) => pokemon.type === this.state.type)
                    .filter((_pokemon, index) => this.state.counter === index )
                    .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <section className="filters-container">
                    <button className="btn filter" value="Fire" onClick={this.filterByType}>Fire</button>
                    <button className="btn filter" value="Psychic" onClick={this.filterByType}>Psychic</button>
                </section>
                <button className="btn next" onClick={this.showNextPokemon}>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;