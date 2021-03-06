// This script makes use of the Oracle of Bacon,
// a very cool site at http://oracleofbacon.org.
// Takes two arguments: names of actors.  The second 
// is optional, and defaults to "Kevin Bacon" if unspecified.
//
// Example usage in a spreadsheet:
//      =kb("Miley Cyrus", "Arnold Schwarzenegger")
//

function kb(from, to) {
  if (!to) {
    to = "Kevin Bacon";
  }
  var parameters = {
    method : "post",
    payload :
    "a=" + encodeURIComponent(from) +
    "&b=" + encodeURIComponent(to) +
    "&u=1" +  // movies only. Use "3" to include TV
    "&p=" + encodeURIComponent('google-apps')
  };
  
  var text = UrlFetchApp.fetch("http://oracleofbacon.org/cgi-bin/xml",
                               parameters).getContentText();
  return parse(text);
}
  
function testBacon() {
  var result = kb("Miley Cyrus", "Arnold Schwarzenegger");
  Logger.log(result);
}

function parse(txt) {
  var doc = Xml.parse(txt, true);
  var attr = doc.spellcheck;
  if (attr) {
    return "Cannot find actor: " + attr.name;
  }
 
  var actors = doc.html.head.getElements("actor");      
  var movies = doc.html.head.getElements("movie");
  
  if (!actors || actors.length ==0) {
    return "no match found";
  }
  
  var movieIndex = 0;
  var r = '';
  var firstPerson = true;
  for (var i in actors) {
    r = r + actors[i].getText();
    if (movies[movieIndex]) {
      r = r + (firstPerson ? "" : " who") + " was in " +
        movies[movieIndex].getText() + " with ";
    }
    movieIndex++;
    firstPerson = false;
  }
  
  return r;
}
