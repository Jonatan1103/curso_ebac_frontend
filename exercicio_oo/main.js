function Mamifero(especie, nome, idade)  {
  this.especie = especie
  this.nome = nome
  this.idade = idade
  this.IncrementarIdade = function() {
    this.idade++
  }
}

function Carnivoro(especie, nome, idade, carnivoro) {
  this.carnivoro = carnivoro
  Mamifero.call(this, especie, nome, idade)
}

function Herbivoro(especie, nome, idade, herbivoro) {
  this.herbivoro = herbivoro
  Mamifero.call(this, especie, nome, idade)
}

const marty = new Herbivoro("Zebra", "Marty", 15, true)
const gloria = new Herbivoro("Hipopótamo", "Glória", 18, true)
const melman = new Herbivoro("Girafa", "Melman", 19, true)
const alex = new Carnivoro("Leão", "Alex", 18, true)
console.log(alex, marty, melman, gloria);
