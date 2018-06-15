//Get the Layout DOM
var layoutDOM = app.activeLayoutDOM();

//Get Number of Paras
var paras1 = layoutDOM.getElementsByClassName("pr-Para1");
console.log("Number of paras with Para1: " + paras1.length);

//Get Number of Paras
var paras2 = layoutDOM.getElementsByClassName("pr-Para2");
console.log("Number of paras with Para2: " + paras2.length);

var spans1 = layoutDOM.getElementsByClassName("ch-Char1");
console.log("Number of spans with Char1: " + spans1.length);

var spans2 = layoutDOM.getElementsByClassName("ch-Char2");
console.log("Number of spans with Char2: " + spans2.length);