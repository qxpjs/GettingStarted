//Observe how we start a new line in the text shown in the alert using \n
var scriptFolders = "Application Scripts:\n" +  app.getAppScriptsFolder() + "\n\nUser Scripts:\n" + app.getUserScriptsFolder();

alert(scriptFolders);
console.log(scriptFolders);