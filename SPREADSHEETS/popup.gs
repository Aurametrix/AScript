function onOpen() {
  var message = 'The current time is ' + new Date().toString();
  var title = 'Welcome to Google Sheets';
  SpreadsheetApp.getActiveSpreadsheet().toast(message, title);
}
