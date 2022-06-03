export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.type = data.types
        this.img = data.sprites.other.dream_world.front_default

    }

    get Template() {
        return `  <div class="text-center">
            <img src="${this.img}" alt="">
            <p class="fs-1 fw-bold m-0">${this.name}</p>
            <p class="m-0 pb-4">Types: ${this.FormatTypes}</p>
            <button class="btn btn-danger rounded" onclick="app.myPokemonController.catch()" >Catch ${this.name}!</button>
          </div>`
    }

    get FormatTypes() {
        let template = ''
        this.type.forEach(t => template += t.type.name)
        return template
    }


}