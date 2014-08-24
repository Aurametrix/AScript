/**
 * To retrieve the data from the spreadsheet, get the range that holds the data 
 *  
 */

function printFoodInfo() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    Logger.log("Food name: " + data[i][0]);
    Logger.log("Food ID: " + data[i][1]);
  }
 }