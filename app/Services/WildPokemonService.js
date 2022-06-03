import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class WildPokemonService {
    async setActive(name) {
        const res = await pokeApi.get('pokemon/' + name)
        console.log(res.data)
        ProxyState.activePokemon = new Pokemon(res.data)
        console.log('new active', ProxyState.activePokemon)
    }
    async getWildPokemon() {
        const res = await pokeApi.get('pokemon?limit=151')
        console.log(res.data)
        ProxyState.wildPokemons = res.data.results
    }

}

export const wildPokemonService = new WildPokemonService()