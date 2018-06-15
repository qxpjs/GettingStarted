//Ask the user

var response = confirm("Do you want to create a New project");

if(response)
{
    app.createProject();
    alert("Project Created.");
}
else
{
    alert("Project NOT created. You canceled the operation.");
}