var Perceptron = require('./perceptron')

var perceptron = new Perceptron(2, 0.001)

//train
for (let index = 0; index < 400; index++) {
    let point = {
        x: Math.random(-100, 100),
        y: Math.random(-100, 100)
    }
    if(point.x > point.y) {
        perceptron.train([point.x, point.y], 1)
    } else {
        perceptron.train([point.x, point.y], -1)
    }
}

//guess
console.log(perceptron.guess([4, 5]));