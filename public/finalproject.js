/****************************************
**************** Calendar ***************
****************************************/
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var date = new Date();
var month = date.getMonth();
var day = date.getDay();
var year = date.getFullYear();

var originalDay = day;
var originalMonth = month;
var originalYear = year;

getEachDay();
var nextButton = document.getElementById("next-month-button");
var prevButton = document.getElementById("prev-month-button");

nextButton.addEventListener('click', getNextMonth);
prevButton.addEventListener('click', getPrevMonth);
//getPrevMonth ();


//function getEvents() {
  //console.log("Registered Button click");
//}
function getEachDay() {
  var newMonth = months[month] + " - " + year;

  var monthHTML = Handlebars.templates.calendar({
     currentMonth: newMonth
   });

   var handleMonth = document.getElementById('this-month');
   handleMonth.innerHTML = monthHTML;
  /*document.getElementById("this-month").innerHTML =  months[month] +" - "+ year;
  var totalDays = days[month];
  var tmpDate = new Date(year, month, 1);
  console.log("Creating Calendar");
  var k = tmpDate.getDay(); //gets the day the month starts on
  var dayNum = 1;
  totalDays += k;
  console.log("Our day:", originalDay);
  for(var i = 0; i < totalDays; i++) {
    var newContainer = document.createElement("div");   //create a partial for this eventually
    var newDiv = document.createElement("div");
    var newPostSection = document.createElement("div");
    if(i >= k) {  //if days have started for that month(i.e to get right day)

      newDiv.innerHTML = dayNum;
      newPostSection.innerHTML = hoe;
      //createEvent(dayNum, newPostSection);
      if(dayNum-1 == originalDay && month == originalMonth && year == originalYear) { //-1 because its in an array i.e. 0-x
        newDiv.style.backgroundColor = "red";
        newDiv.style.borderBottom = "2px solid black";  //if our current day slightly change the style
      }
      dayNum++;
    }
    else {
      newDiv.innerHTML = "-";
    }
    newContainer.className = "day-container";
    newDiv.className = "days";
    newPostSection.className = "posts";
    newContainer.appendChild(newDiv);
    newContainer.appendChild(newPostSection);
    ////////////////////////
    document.getElementById("get-day").appendChild(newContainer);
  }*/
}

/*function createEvent(dayNum, newPostSection) {
  if(dayNum >= 16 && month == 11 && year == 2019) { //just threw some random days to test
    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.id = 'view-event-button';
    button.className = "view-event-button";
    newPostSection.appendChild(button);
  }
  var buttonListener = document.getElementsByClassName("view-event-button");
  for(var i = 0; i < buttonListener.length; i++) {
    buttonListener[i].addEventListener('click', getEvents);
  }
}*/

function getNextMonth () {
  deleteLastMonth();
  month++;
  var tmp = month;
  if(tmp == 12) {
    month = 0;
    year++;
  }
  console.log("Getting next Month");
  getEachDay();
}

function getPrevMonth () {
  deleteLastMonth();
  month--;
  var tmp = month;
  if(tmp == -1) {
    month = 11;
    year--;
  }
  getEachDay();
}

function deleteLastMonth() {
  var tmpDate = new Date(year, month, 1);
  var k = tmpDate.getDay();
  var totalDays = days[month];
  var noMatch = document.getElementsByClassName('days');
  var noMatchTwo = document.getElementsByClassName('posts');
  var noMatchThree = document.getElementsByClassName('day-container');
  for(var i = 0; i < (totalDays + k); i++) {
      noMatch[0].remove();
      noMatchTwo[0].remove();
      noMatchThree[0].remove();
  }
}

/****************************************
**************** End Calendar ***********
****************************************/
