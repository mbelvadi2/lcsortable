function lcsortable(callnum){
 if (callnum.map)
  { return callnum.map(lcsortable); }
  else 
  {
    
function isLetter(str) {  return str.length === 1 && str.match(/[a-z]/i);};

function isspace(str) {  return str.length === 1 && str.match(/ /i);};

function isnumber(str) {  return str.length === 1 && str.match(/[0-9]/i);};

function isperiod(str) {  return str.length === 1 && str.match(/\./i);};

function padWithZeroes(n, width) { while(n.length<width) n = '0' + n; return n;} ;
function padWithZeroesRight(n, width) { while(n.length<width) n = n + '0'; return n;} ;
    
var position_counter = 0;
var lc_class = "";
var subject_val = "";
var cutter1 = "";
var cutter2 = "";
var pubyear = "";
var rest_of_callnum = ""; // may be other characters relating to vols or copies that we won't sort on as notation is too inconsistent
var classstart = position_counter;
var classend = position_counter+1;
//return callnum.substring(position_counter,position_counter+6); //debug
if (isLetter(callnum.substring(position_counter+3,position_counter+4)) && (isLetter(callnum.substring(position_counter+2,position_counter+3)) )) { classend = position_counter+4;}
else if (isLetter(callnum.substring(position_counter+2,position_counter+3)) && isLetter(callnum.substring(position_counter+1,position_counter+2))) { classend = position_counter+3; }
  else if (isLetter(callnum.substring(position_counter+1,position_counter+2))) { classend = position_counter+2; }
else { classend = position_counter+1; };
lc_class = callnum.substring(classstart,classend);
//  lc_class = lc_class.toUpperCase();
  
position_counter = classend;

//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++};
// if there's a period between the last element and the next element
if (isperiod(callnum.substring(position_counter,position_counter+1))) { position_counter++};
  
var subjectstart = position_counter;
var subjectend = position_counter+1;

if (isnumber(callnum.substring(position_counter+3,position_counter+4)) && isnumber(callnum.substring(position_counter+2,position_counter+3))) { subjectend = position_counter+4; }
  else if (isnumber(callnum.substring(position_counter+2,position_counter+3)) && isnumber(callnum.substring(position_counter+1,position_counter+2))) { subjectend = position_counter+3; }
else if (isnumber(callnum.substring(position_counter+1,position_counter+2)) && isnumber(callnum.substring(position_counter,position_counter+1)) ) { subjectend = position_counter+2 }
else {subjectend = subjectstart+1 };
subject_val = padWithZeroes(callnum.substring(subjectstart,subjectend),4);
position_counter = subjectend;


//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++};


// look for whether the subject area number has a decimal number
if (isperiod(callnum.substring(position_counter,position_counter+1)) && isnumber(callnum.substring(position_counter+1,position_counter+2)))
{
  position_counter++;
  subject_val +=".";
  var subject_decimal_start = position_counter;
  var subject_decimal_end = position_counter+1;
  if (isnumber(callnum.substring(position_counter+3,position_counter+4)) && isnumber(callnum.substring(position_counter+2,position_counter+3))) { subject_decimal_end = position_counter+4 }
  else if (isnumber(callnum.substring(position_counter+2,position_counter+3)) && isnumber(callnum.substring(position_counter+1,position_counter+2))) { subject_decimal_end = position_counter+3 }
  else if (isnumber(callnum.substring(position_counter+1,position_counter+2))) { subject_decimal_end = position_counter+2 }
  else {subject_decimal_end = position_counter+1 };
  subject_val += padWithZeroesRight(callnum.substring(subject_decimal_start,subject_decimal_end),4);
  position_counter = subject_decimal_end;
}
else if (isperiod(callnum.substring(position_counter,position_counter+1)) && !isnumber(callnum.substring(position_counter+1,position_counter+2))) { position_counter++; subject_val += ".0"};
//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++; };  
  // if there's a period between the last element and the next element
if (isperiod(callnum.substring(position_counter,position_counter+1))) { position_counter++};
    // return position_counter+";"+lc_class +";" + subject_val + cutter1; //debug
//  return "here"+":"+position_counter+"-"+callnum.substring(position_counter,position_counter+1);  
  //First cutter, always a single letter followed by up to 3 digits
if (isLetter(callnum.substring(position_counter,position_counter+1))) { 

   cutter1 = "."+callnum.substring(position_counter,position_counter+1); // cutter1 = cutter1.toUpperCase();
   position_counter++;
   var cutterstart = position_counter;
   var cutterend = position_counter;
   // now get the whole number that goes with that cutter, we can be sure the next character is a number
  if (isnumber(callnum.substring(position_counter+3,position_counter+4)) && isnumber(callnum.substring(position_counter+2,position_counter+3))) { cutterend = position_counter+4; }
  else if (isnumber(callnum.substring(position_counter+2,position_counter+3)) && isnumber(callnum.substring(position_counter+1,position_counter+2))) { cutterend = position_counter+3; }
else if (isnumber(callnum.substring(position_counter+1,position_counter+2)) && isnumber(callnum.substring(position_counter,position_counter+1)) ) { cutterend = position_counter+2 }
else {cutterend = cutterstart+1 };
  cutter1 += padWithZeroesRight(callnum.substring(cutterstart,cutterend),4);
  position_counter = cutterend;
}; // end of looking for first cutter



//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++};
// if there's a period between the last element and the next element
if (isperiod(callnum.substring(position_counter,position_counter+1))) { position_counter++};
  
//Look for second cutter, always a single letter followed by up to 3 digits
if (isLetter(callnum.substring(position_counter,position_counter+1))) {
   cutter2 = callnum.substring(position_counter,position_counter+1); cutter2 = cutter2.toUpperCase();
   position_counter++;
   var cutter2start = position_counter;
   var cutter2end = position_counter;
   // now get the whole number that goes with that cutter, we can be sure the next character is a number
    if (isnumber(callnum.substring(position_counter+3,position_counter+4)) && isnumber(callnum.substring(position_counter+2,position_counter+3))) { cutter2end = position_counter+4; }
  else if (isnumber(callnum.substring(position_counter+2,position_counter+3)) && isnumber(callnum.substring(position_counter+1,position_counter+2))) { cutter2end = position_counter+3; }
else if (isnumber(callnum.substring(position_counter+1,position_counter+2)) && isnumber(callnum.substring(position_counter,position_counter+1)) ) { cutter2end = position_counter+2 }
else {cutter2end = cutter2start+1 };
  cutter2 += padWithZeroesRight(callnum.substring(cutter2start,cutter2end),4);
  position_counter = cutter2end;
}; // end of looking for  cutter2
  
//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++};
// if there's a period between the last element and the next element
if (isperiod(callnum.substring(position_counter,position_counter+1))) { position_counter++};
  
//Look for a year as the next element - optional but if present, is always exactly 4 digits
if (isnumber(callnum.substring(position_counter,position_counter+1)))
  {
   pubyear = callnum.substring(position_counter,position_counter+4)
   position_counter +=4;
  };

//in case there's a space between the last element and the next element
if (isspace(callnum.substring(position_counter,position_counter+1))) { position_counter++};
// if there's a period between the last element and the next element
if (isperiod(callnum.substring(position_counter,position_counter+1))) { position_counter++};
  

if (callnum.length > position_counter+1)
{ rest_of_callnum = callnum.substring(position_counter,callnum.length);
};
    
return lc_class + subject_val + cutter1 + cutter2 + pubyear + rest_of_callnum;


   
} // end of "else" whether we are recursing through a "map" array 
  
}; // end of function lcsortable
