//Get the Reference to the Current Layout
var activeProject = app.activeProject();

//Get the Asset List
var styleSheets = activeProject.getAssets(app.constants.assetTypes.kAssetParaStyle);

//Log the names of all the assets
for(i=0; i < styleSheets.length;i++)
{
    console.log("Asset name " + i + ": '" + styleSheets[i].name + "'");
}