//Ask the user

var userName = prompt("What is your name?", "Quark");

if(userName)
{    
    alert("Hello " + userName);
}
else
{
    alert("You canceled the operation.");
}