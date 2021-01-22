const assert = require('assert')

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
]

// escreva shipLength abaixo
// Usei o object destructuring e o default params para colocar um valor padrão na medida do navio caso
// não tenha essa propriedade no objeto.
const shipLength = ({name, length, measurementUnit = 'meters'}) => `${name} is ${length} ${measurementUnit} long`;

assert.strictEqual(shipLength(ships[0]), "Titanic is 269.1 meters long")
assert.strictEqual(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long")
assert.strictEqual(shipLength(ships[2]), "Yamato is 256 meters long")