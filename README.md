# lcsortable
A Google Sheets script to convert Library of Congress call numbers into a format that can be sorted


In a particular Google Sheets spreadsheet file where you have a column that has complete LC call numbers, for instance extracted from your catalogue, do the following:
1. Tools - Script Editor
2. delete the default blank function and paste into it the entire contents of code.gs provided here
3. Save the script
4. Back in your spreadsheet, create a new column.  This assumes your worksheet has a single header row and the call number is in column A - adjust as needed.
5. In row 2 (the first data row) of your new column, put the following:  =lcsortable(A2:A)
This will do the equivalent of an arrayformula down the entire new column.

It is highly recommended that after doing this, you do on the new column the following sequence, in order to convert the formula to plan text to reduce memory working with the rest of the spreadsheet, especially if it's a very large one:
[click on the column letter to select the entire column] Edit - Copy, Edit - Paste Special - Values Only
Now you should find that you can sort your spreadsheet on this new column and your LC call numbers will be in proper order.

This function should handle all of the following:
LC call numbers that either do or don't have spaces before their cutter periods
Old-stype LC call numbers that have the LC class followed by the year of publication instead of the subject area number
LC call numbers with 3 letters as well as 1 or 2.

If anyone runs into any examples of legitimate LC call numbers that this script does NOT properly handle, please contact me!
mbelvadi@upei.ca  Melissa Belvadi, Collections Librarian, University of Prince Edward Island
