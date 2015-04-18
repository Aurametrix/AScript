Setting Up the Spreadsheet and Script

Open a new spreadsheet in Google Docs.
Save the spreadsheet by giving it the name Kevin Bacon.
Choose Tools > Script Gallery (Note: the script gallery is only available in the older version of Google Sheets. To follow the next steps, you need to create a spreadsheet in the old version).
On the Script Gallery dialog box, locate the the Six Degrees of Kevin Bacon Calculator script by typing in the following search term:
Kevin Bacon

Click Install. You see a message that the script was successfully installed.
Click Close.

Running the Script

To run the script, type the following in any cell of the spreadsheet, where actor_name1 and actor_name2 are the names of any two actors, and then press Enter:

=kb("actor_name1","actor_name2")

For example:

=kb("Ellen DeGeneres","Kevin Bacon")

The same values can return different results. You might get this for Ellen DeGeneres and Kevin Bacon:

Ellen DeGeneres was in Doctor Dolittle (1998) with Pruitt Taylor Vince who was in Trapped (2002) with Kevin Bacon

Or you might get this:

Kevin Bacon was in Murder in the First (1995) with Stephen Tobolowsky who was in Trevor (1994) with Ellen DeGeneres



