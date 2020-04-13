class Perceptron {
    constructor(n, c) {
        this.weight = new Array(n);
        this.c = c
        for(let i = 0; i < n; i++){
            this.weight[i] = Math.random(-1, 1)
        }
    }

    guess(inputs) {
        let sum = 0
        for(let i = 0; i < this.weight.length; i++) {
            sum += inputs[i] * this.weight[i]
        }
        return this.activate(sum)
    }

    activate(sum) {
        if(sum > 0) return 1
        else return -1
    }

    train(inputs, expectation) {
        let guessVal = this.guess(inputs)
        let error = expectation - guessVal
        for (let i = 0; i < this.weight.length; i++) {
            this.weight[i] += this.c*error*inputs[i]
        }
    }
}

module.exports = Perceptron