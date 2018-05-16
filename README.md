# Perceptrons
Simple Typescript showcase of the linear perceptron algorithm

### Requirements
* NodeJS with NPM installed
* the Typescript package for NPM

### Compiling
To compile, simply run `tsc` in the repository directory.

### Running/Testing
The preview.html file will load the compiled source and run it. Use the browser of your choice to open this file.

### Limitations in Theory
These perceptrons are only capable of emulating a linear bisection of space. In 1 dimension, that would be distinguishing between numbers left and right of a point. In 2 dimensions, that would be separating things on one side of a line from things on the other side (and in 3D, it would be a plane).
This means the perceptrons cannot be trained to distinguish between points that do not follow a linear pattern. A popular example is that XOR cannot be emulated because no line can be drawn separating the true points from the false points.
