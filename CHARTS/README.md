A chart requires three libraries:

The Google JSAPI API

    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    
  
The Google Visualization library & 
The library for the chart itself:

    google.load('visualization', '1.0', {'packages':['corechart']});

The following scripts loads the Google Visualization and chart libraries which defines all the core utility classes and functions. For example: `DataTable` to hold your data; and `Query` for querying data providers; and `error handlers` to help you trap and display errors on page:
<script type="text/javascript" >
    // Load the Visualization API library and add package name.
    google.load( 'visualization', '1.0', { 'packages' :[ <list_of_package_names>] });
</script>
The following code holds the chart code which should create and define the chart. The `corechart` library holds several common chart classes such as PieChart, BarChart etc. The other charts require to load specific library.
<script type="text/javascript" >
    google.setOnLoadCallback( drawChart );
    // ... draw the chart ...
</script>

These libraries are loaded using two <script> links in your page code

The google.load for the following packages name are “corechart”.

Synatax

    google.load("visualization", "1", { 'packages': [ "corechart" ] });

Pie Chart: It is a circular statistical graphic, which is divided into sectors to illustrate numerical proportion.
The visualization’s class name is google.visualization.PieChart.

var visualization = new google.visualization.PieChart( container );
