#!/usr/bin/env node
'use strict';
const autocompletePrompt = require('cli-autocomplete');
const numberPrompt = require('number-prompt');
const pokemonData = require('./data/pokemon_data');
const cpCalculator = require('./');
const util = require('util');

const suggestPokemons = (input) => Promise.resolve(
  pokemonData.filter((pokemon) => pokemon.title.slice(0, input.length) === input)
);

autocompletePrompt('Choose a Pokemon', suggestPokemons).on('submit', (v) => {
  const pickedPokemon = pokemonData.filter((pokemon) => pokemon.value === v);

  numberPrompt(`Current CP of ${pickedPokemon[0].title}?`).on('submit', (n) => {
    cpCalculator(pickedPokemon[0], n);
    process.exit(-1);
  });

});
