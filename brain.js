var brain = require("./node_modules/brain/lib/brain")
var net = new brain.NeuralNetwork();
 
net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}], {log: true});
 
var output = net.run([1, 0]);  // [0.987] 
console.log(output);

