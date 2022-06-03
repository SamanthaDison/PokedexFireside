import { ProxyState } from "../AppState.js"
import { myPokemonService } from "../Services/MyPokemonService.js"


function _drawMyPokemon() {
    let template = ''
    ProxyState.myPokemon.forEach(p => template += ` <button class="btn btn-warning rounded m-2" >${p.name}</button>`)
    document.getElementById('myPokemon').innerHTML = template
}
export class MyPokemonController {
    constructor() {
        ProxyState.on('myPokemon', _drawMyPokemon)
    }

    async catch() {
        try {
            await myPokemonService.catch()
        } catch (error) {
            console.log(error)
        }
    }


}