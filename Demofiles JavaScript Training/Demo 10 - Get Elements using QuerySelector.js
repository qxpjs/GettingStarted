//Get the Layout DOM
var layoutDOM = app.activeLayoutDOM();

//Get All Text Boxes
var textBoxes = layoutDOM.querySelectorAll('qx-box[box-content-type="text"]');
console.log("Found text boxes: " + textBoxes.length);

//Get All Picture Boxes with Picture BG set to None
pictureBoxesNone = layoutDOM.querySelectorAll('qx-box[box-content-type="picture"][style*="--qx-background-color:none"]');
console.log("Found picture boxes with None BG Color: " + pictureBoxesNone.length);

//Get All Boxes on a Page
boxesOnPage1 = layoutDOM.querySelectorAll("qx-box[style*='--qx-page:1']");
console.log("Found boxes on Page 1: " + boxesOnPage1.length);
