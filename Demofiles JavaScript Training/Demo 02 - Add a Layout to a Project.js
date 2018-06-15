//Get the Reference to the Current Layout
var activeProject = app.activeProject();

//Set us the Properties for the New layout
var layoutName = "My New Layout";
var layoutType = app.constants.layoutMediaTypes.PRINT_MEDIA_TYPE;

//Configure Print Layout Options.
var layoutOptions = new app.PrintLayoutOptions();

layoutOptions.pageHeight = "8.5in";
layoutOptions.pageWidth = "11in";
layoutOptions.gutterWidth = "0.25in";
layoutOptions.pageMargins = ["0.75in","0.75in","0.75in","0.75in"]; //Top, Left, Bottom, Right
layoutOptions.autoTextBox = true;
layoutOptions.colCount = 3;
layoutOptions.doubleSided = false;
layoutOptions.pageCount = 10;
layoutOptions.pageDirection = false;

console.log("Adding a layout '" + layoutName + "'");
newLayout = activeProject.createLayout(layoutName, layoutType, layoutOptions);