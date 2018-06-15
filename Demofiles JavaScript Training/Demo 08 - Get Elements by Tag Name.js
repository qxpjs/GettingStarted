//Get the Layout DOM
var layoutDOM = app.activeLayoutDOM();

//Get Number of Pages
var pages = layoutDOM.getElementsByTagName("qx-page");
console.log("Number of pages: " + pages.length);

//Get Number of Boxes
var boxes = layoutDOM.getElementsByTagName("qx-box");
console.log("Number of boxes: " + boxes.length);