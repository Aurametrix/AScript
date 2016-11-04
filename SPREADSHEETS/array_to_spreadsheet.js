function dgtest(){
 
  var s = SpreadsheetApp.getActiveSpreadsheet();
  var ss = s.getActiveSheet();
  var sc = ss.getActiveCell();
 
  //I really need to tweak this so we can enter a SPARQL query and then generate the args string from it...
  var args="query=prefix+sch-ont%3A+%3Chttp%3A%2F%2Feducation.data.gov.uk%2Fdef%2Fschool%2F%3E%0D%0ASELECT+%3Fschool+%3Fname+%3Fdate+%3Fdistrict+WHERE+{%0D%0A%3Fschool+a+sch-ont%3ASchool%3B%0D%0Asch-ont%3AestablishmentName+%3Fname%3B%0D%0Asch-ont%3AopenDate+%3Fdate%3B%0D%0Asch-ont%3AdistrictAdministrative+%3Fdistrict.%0D%0A}+ORDER+BY+DESC%28%3Fdate%29+LIMIT+15&output=csv&callback=&tqx=&service-uri=http%3A%2F%2Fservices.data.gov.uk%2Feducation%2Fsparql";
 
  var x=UrlFetchApp.fetch('http://data-gov.tw.rpi.edu/ws/sparqlproxy.php',{method: 'post', payload: args});
  var ret=x.getContentText();
  ret = CSVToArray( ret, "," );
 
  var arr = [];
  var c = [];
  for (var i=0;i < ret.length-1;i++) {
    c=[];
    for (var j=0; j< ret[0].length;j++){
      c.push(ret[i][j]);
    }
    arr.push(c);
  }
 
  var destinationRange = ss.getRange(1, 1, i, j);
  destinationRange.setValues(arr);
}
