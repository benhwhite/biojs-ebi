
// timezone offset
var timezoneOffset = 0; // in s

// basically this small script shows all biojs-date elements
// depending on their scheduled time
var els = document.querySelectorAll('[biojs-date]');

// use GMT time in JS (new Date returns local time)
var currentDate = new Date();
currentDate = new Date(currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000);

for(var i = 0, n = els.length; i < els.length; i++){
	var el = els[i];
	var bDate = Date.parse(el.getAttribute('biojs-date')) + (timezoneOffset * 1000);
	var timeDifference = bDate - currentDate.getTime();
  // event is in the past
  if(timeDifference < 0){
    el.style.display = "block";
  }
}
