filePath = "C:\\Temp_C\\Demo\\TextFile.txt";

var fileData = fs.readFileSync(filePath);//stores a string that contains all the data of a CSV
if (fileData == "") {// if the file does not exist or is blank
    alert("The file is empty!");    
}
else {
    console.log("File Data:\n" + fileData);
}