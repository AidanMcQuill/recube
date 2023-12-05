import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ... (imports)

const PokemonDetails = ({ pokemonName = 'pikachu' }) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [pokedexEntry, setPokedexEntry] = useState('');
  
    useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          // Make a GET request to the PokéAPI for the specified Pokémon's information
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`);
          setPokemonData(response.data);
          const speciesResponse = await axios.get(response.data.species.url);
        
          // Find the English Pokédex entry
          const englishEntry = speciesResponse.data.flavor_text_entries.find(entry => entry.language.name === 'en');
          
          // Set the Pokédex entry in English
          setPokedexEntry(englishEntry ? englishEntry.flavor_text : 'No English entry available');
        
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      };
  
      fetchPokemonData();
    }, [pokemonName]);
  
    return (
      <div className='data'>
        {pokemonData ? (
          <div>
            <h1>{pokemonName} Details</h1>
            <img
              src={pokemonData.sprites.front_default}
              alt={`${pokemonName} sprite`}
              style={{ minWidth: '200px' }}
            />
            <p><span>Name:</span> {pokemonData.name}</p>
            <p><span>Pokédex Number:</span> {pokemonData.id}</p>
            <p><span>Pokédex Entry:</span> {pokedexEntry}</p>
            <p><span>Types:</span> {pokemonData.types.map(type => type.type.name).join(', ')}</p>
            <p><span>Weight:</span> {pokemonData.weight} lbs</p>

            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Locating Pokemon...</p>
        )}
      </div>
    );
  };
  
  export default PokemonDetails;
  