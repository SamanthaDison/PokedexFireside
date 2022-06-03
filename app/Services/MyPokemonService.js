import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonService {
    async catch() {
        const res = await sandboxApi.post('sam/pokemon', ProxyState.activePokemon)
        console.log(res.data)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    }

}

export const myPokemonService = new MyPokemonService()