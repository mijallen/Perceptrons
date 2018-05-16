class Perceptron {
    private weights: number[] = [];
    private bias: number = 0;

    private trainingInputs: number[][] = [];
    private trainingOutputs: boolean[] = [];

    public addTrainingPoint(input: number[], expected: boolean): void {
        if (input.length == 0) {
            throw "Perceptron.addTrainingPoint: cannot use zero-dimensional input points";
        }

        if (this.weights.length == 0) {
            this.weights.length = input.length;
            this.weights.fill(0);
        }

        if (this.weights.length != input.length) {
            throw "Perceptron.addTrainingPoint: dimensions of input point does not match previous training points";
        }

        this.trainingInputs.push(input);
        this.trainingOutputs.push(expected);
    }

    public evalutate(input: number[]): boolean {
        if (this.weights.length != input.length) {
            throw "Perceptron.evaluate: dimensions of input point does not match training points";
        }

        let total = this.bias;

        for (let weightIndex = 0; weightIndex < this.weights.length; weightIndex++) {
            total += (this.weights[weightIndex] * input[weightIndex]);
        }

        return (total > 0);
    }

    private correctWithTrainingPoint(trainingIndex: number, expected: boolean, actual: boolean): void {
        let correction = Number(expected) - Number(actual);

        this.bias += correction;

        for (let weightIndex = 0; weightIndex < this.weights.length; weightIndex++) {
            let trainingInput = this.trainingInputs[trainingIndex];
            this.weights[weightIndex] += trainingInput[weightIndex] * correction;
        }
    }

    public train(): void {
        const MAX_ITERATIONS = 1000000;
        let ITERATION = 0;

        while (ITERATION < MAX_ITERATIONS) {
            let testFail = false;

            for (let trainingIndex = 0; trainingIndex < this.trainingInputs.length; trainingIndex++) {
                let input = this.trainingInputs[trainingIndex];
                let expected = this.trainingOutputs[trainingIndex];
                let actual = this.evalutate(input);

                if (expected != actual) {
                    this.correctWithTrainingPoint(trainingIndex, expected, actual);
                    testFail = true;
                    break;
                }
            }

            if (!testFail) break;
            ITERATION++;
        }

        if (ITERATION == MAX_ITERATIONS) {
            throw "Perceptron.train: unable to train perceptron with given training set";
        }
    }
}
