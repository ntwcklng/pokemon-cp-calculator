#!/usr/bin/env node
'use strict';
const autocompletePrompt = require('cli-autocomplete');
const numberPrompt = require('number-prompt');
const pokemonData = require('./data/pokemon_data');
const cpCalculator = require('./');

const suggestPokemons = (input) => Promise.resolve(
  pokemonData.filter((pokemon) => pokemon.title.slice(0, input.length) === input)
);

function getCP(pickedPokemon) {
  numberPrompt(`Current CP of ${pickedPokemon[0].title}?`).on('submit', (cp) => {
    if(cp <= 0) return console.log('Please Enter a CP greater than 0'), getCP(pickedPokemon);

    cpCalculator(pickedPokemon[0], cp);
    process.exit(-1);
  });
}

autocompletePrompt('Choose a Pokemon', suggestPokemons).on('submit', (v) => {
  const pickedPokemon = pokemonData.filter((pokemon) => pokemon.value === v);
  getCP(pickedPokemon);
});
