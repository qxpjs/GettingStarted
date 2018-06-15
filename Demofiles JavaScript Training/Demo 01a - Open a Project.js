//Open the Project
var myProject = app.openProject("c:\\temp_c\\demo\\demo.qxp");

//Check for Errors
if(myProject.projectID)
{
    console.log("Opened Project with ID: " + myProject.projectID);
}
else
{
    console.log("Unable to Open the project. Error Code: " + myProject.errCode);
}