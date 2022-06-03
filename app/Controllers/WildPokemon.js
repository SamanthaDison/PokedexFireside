import { ProxyState } from "../AppState.js"
import { wildPokemonService } from "../Services/WildPokemonService.js"


function _drawWildPokemon() {
    let template = ''
    ProxyState.wildPokemons.forEach(p => template += ` <button class="btn btn-warning rounded m-2" onclick="app.wildPokemonController.setActive('${p.name}')">${p.name}</button>`)
    document.getElementById('wildPokemon').innerHTML = template
}

function _drawActive() {
    document.getElementById('activePokemon').innerHTML = ProxyState.activePokemon.Template
}

export class WildPokemonController {
    constructor() {
        console.log('hello from the controller')
        ProxyState.on('wildPokemons', _drawWildPokemon)
        ProxyState.on('activePokemon', _drawActive)
        this.getWildPokemon()
    }

    async getWildPokemon() {
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            console.log(error)
        }
    }

    async setActive(name) {
        try {
            await wildPokemonService.setActive(name)
        } catch (error) {
            console.log(error)
        }
    }
}