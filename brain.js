var brain = require("./node_modules/brain/lib/brain")
var net = new brain.NeuralNetwork(
  // {
  //   hiddenlLayers: [5],
  //   learningRate: 0.6
  // }
);
 
net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}], {log: true});
 
var output = net.run([1, 0]);  // [0.987] 
console.log(output);

// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
//            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
//            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}], {log: true});

// var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 } 

console.log(output);