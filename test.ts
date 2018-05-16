/* provide Perceptrons with training sets that can be mimicked with a linear function */

let andPctn = new Perceptron(); // BOOLEAN AND
andPctn.addTrainingPoint([0, 0], false);
andPctn.addTrainingPoint([0, 1], false);
andPctn.addTrainingPoint([1, 0], false);
andPctn.addTrainingPoint([1, 1], true);
andPctn.train();

let orPctn = new Perceptron(); // BOOLEAN OR
orPctn.addTrainingPoint([0, 0], false);
orPctn.addTrainingPoint([0, 1], true);
orPctn.addTrainingPoint([1, 0], true);
orPctn.addTrainingPoint([1, 1], true);
orPctn.train();

let notPctn = new Perceptron(); // BOOLEAN NOT
notPctn.addTrainingPoint([0], true);
notPctn.addTrainingPoint([1], false);
notPctn.train();

/* showcase several uses of trained perceptrons */

let result = false;

result = orPctn.evalutate([0, 1]); // (0 OR 1) -> TRUE
console.log(result);

result = andPctn.evalutate([ // (1 AND NOT(1)) -> FALSE
    Number(true),
    Number(notPctn.evalutate([1]))
]);
console.log(result);

result = notPctn.evalutate([ // NOT(0 OR 0) -> FALSE
    Number(orPctn.evalutate([0, 0]))
]);
console.log(result);

result = orPctn.evalutate([ // (0 AND 0) OR NOT(1 AND 1) -> FALSE
    Number(andPctn.evalutate([0, 0])),
    Number(notPctn.evalutate([Number(andPctn.evalutate([1, 1]))]))
]);
console.log(result);
