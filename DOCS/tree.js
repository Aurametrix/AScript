/**
 * Displays contents of a Google Docs Collection in Tree format
 *
 * uses Google Web Toolkit widget
 *     
 */

function doGet(e) {   
  var app = UiApp.createApplication();
  var scrollPanel = app.createScrollPanel(); // Scroll Panel is a Google Web Toolkit Widget
  tree = app.createTree(); // Tree is a Google Web Toolkit Widget
  tree.addItem(buildTree(app, "Enterprise 2.0 - Saqib"));
  scrollPanel.add(tree);  
  scrollPanel.setHeight("500");
  app.add(scrollPanel);
  return app;
}
 
function buildTree(a, searchTerm) {
  var tree = a.createTreeItem(); // TreeItem is Google Web Toolkit Widget
  tree.setText(searchTerm);
 
  // Use of the Google Apps Script DocList Service to retrieve the collections.
  var folders = DocsList.getFolder(searchTerm).getFolders(); 
  for (var i = 0; i < folders.length; i++) {
    tree.addItem(buildTree(a, folders[i].getName())).setState(true, true);
  }
 
  var files = DocsList.getFolder(searchTerm).getFiles();
  for (var i = 0; i < files.length; i++) {    
    if (files[i].getType() == "document") {
      urlBase = "https://docs.google.com/document/edit?id=";
      iconHTML = "https://docs.google.com/images/doclist/icon_7_document_list.png";
    } 
    else if (files[i].getType() == "spreadsheet") {      
      urlBase = "https://spreadsheets.google.com/ccc?key=";
      iconHTML = "https://docs.google.com/images/doclist/icon_7_spreadsheet_list.png";
    }
    else if (files[i].getType() == "presentation") {       
      urlBase = "https://docs.google.com/present/edit?id=";
      iconHTML = "https://docs.google.com/images/doclist/icon_7_presentation_list.png";
    }
    else if (files[i].getType() == "drawing") {       
      urlBase = "https://docs.google.com/drawings/edit?id=";
      iconHTML = "https://docs.google.com/images/doclist/icon_7_drawing_list.png";       
    }
    else {
      urlBase = "https://docs.google.com/fileview?id=";
      iconHTML = "https://docs.google.com/images/doclist/icon_7_generic_list.png";    
    }    
 
    var image = a.createImage(iconHTML);
    var fileLabel = a.createAnchor(files[i].getName(), urlBase+ files[i].getId());     
    var fileLabelPanel = a.createHorizontalPanel();
    fileLabelPanel.add(image);
    fileLabelPanel.add(fileLabel);     
    tree.addItem(fileLabelPanel).setState(true, true);
  }   
  return tree;   
}
