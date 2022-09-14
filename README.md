# Getting started with the Select React Component

## What is it?

It is a dropdown menu component. When you click on it, a menu appears. From that menu, you choose an option, it will update the button.

## Install it

```bash
npm install select-react-component
```

```bash
import { Select } from "select-react-component"
```

## How to use it?

The list of items of your dropdown menu is an array of data. So if you want to create your list of items, you will have write your data as follow:
data={[array]}

If you want to display a default value, you just need to give to value the desired value: it could be a string or the first data of your array:
value={[array][0]}

Example:
You have create a list of pokemon, so the user can choose his/her first pokemon.
Let's say you have choice between three pokemons only (yeah, no pikachu. Back to Green/Blue/Red versions of pokemon).
Your list will be: Bulbasaur, Charmander, Squirtle

```bash
const pokemonList = ["Bulbasaur", "Charmander", "Squirtle"];
<Select 
    data={pokemonList}
    value={pokemonList[0]} />
```