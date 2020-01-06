Google Apps Script
=======

Create a new Google Doc (AppsScript1)

From within your new document, select the menu item Tools > Script editor. 
If you are presented with a welcome screen, click Blank Project on the Left 
(under Create script for)

paste docs.js

From script editor, create a new file by selecting the menu item File > New > Html file. 

Name the file "Sidebar".

paste docs.html.txt

Name your new script "Translate Quickstart"
(This name will appear in Add-ons menu, the authorization dialog and other places)

Select the menu item File > Save all. 

Reload

Switch back to the original doc (AppsScript1).

Select "Translate Quickstart" sub-menu from the Add-ons menu. 

REST for translate API:

https://developers.google.com/translate/v2/using_rest#supported-query-params

Create videos from google spreadsheets:
http://www.moovly.com/products/video-automator

===

Start "Translate Quickstart".

A dialog box will appear and tell you that the script requires authorization. 
Click Continue. A second dialog box will then request authorization for specific Google services. Read the notice carefully, then click Accept.
A sidebar will appear. To test it, type some text into your document, 
then select it and click the blue Translate button. To replace the text in the document, click Insert.


https://developers.google.com/apps-script/quickstart/docs



(Using the HtmlService class you can create the HTML page with the form_
Connect Google Apps Script to Google Drive
This will connect HTML service, for standard HTML, CSS, and client-side JavaScript.

===========
From within your new spreadsheet, select the menu item Tools > Script editor. If you are presented with a welcome screen, click Blank Project.
Delete any code in the script editor and paste in the content of SPREADSHEETS/macros.js

Switch back to your spreadsheet and reload the page.

Type two addresses in cells A2 and B2
Enter the formula =DRIVINGDISTANCE(A2,B2) into cell C2 and press enter. After a moment, the driving distance between the two addresses will be shown in the cell.
Enter the formula =METERSTOMILES(C2) into cell D2 and press enter. After a moment, the equivalent distance in miles will be shown in the cell.
Add additional rows of addresses and copy the formulas in columns C and D to compute the driving distances between various places.
Select the menu item Directions > Generate step-by-step. (The Directions menu is a custom menu that the script added to the spreadsheet. It should have appeared a few seconds after you reloaded the spreadsheet.)
A dialog box will appear and tell you that the script requires authorization. Click Continue. A second dialog box will then request authorization for specific Google services. Read the notice carefully, then click Accept.
Now that the script is authorized, select Directions > Generate step-by-step again. In the dialog that appears, enter the row number of the addresses for which you want to generate directions, then click OK. After a moment, a new sheet will be created with nicely formatted directions.

[expense manager](https://github.com/mitul45/expense-manager); see also [HN discussion](https://news.ycombinator.com/item?id=14279653)

[Tetris on google sheets](https://plumsempy.com/2018/09/17/tetris-on-google-sheets/)

### Google Experiments

* [semantic experiences](https://research.google.com/semanticexperiences/)
   * [talk to books](https://books.google.com/talktobooks/)
   * [semantic world associations](https://research.google.com/semantris/)
   * [develop apps understanding language](https://research.google.com/semanticexperiences/for-developers.html)
   
* [	Xg2xg: Lookup table of similar tech and services for ex-Googlers](https://github.com/jhuangtw-dev/xg2xg)   
   
 ### Search Operators
 
+ AND, OR, * wildcard; define; filtype; site; related

+ ( ) -  Group multiple terms or search operators to control how the search is executed.

+ $ - Search for prices. Also works for Euro (€), but not GBP (£) 

+ cache: - Returns the most recent cached version of a web page

+ intitle - Find pages with a certain word (or words) in the title (also inurl, intext, allintext

+ AROUND(X)

###


Comparing OCR: Google, Amazon, Microsoft
(https://www.amplenote.com/blog/2019_examples_amazon_textract_rekognition_microsoft_cognitive_services_google_vision)

###
[Degoogle](https://github.com/tycrek/degoogle)
