var imgPath = "file:///C:/Temp_C/Demo/alien2.jpg";

//get the image node for the first picture box
imgNode = app.activeLayoutDOM().getElementsByTagName('qx-img')[0];

//Set the Source 
imgNode.setAttribute('src', imgPath);