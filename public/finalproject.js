/****************************************
**************** Calendar ***************
****************************************/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

var originalDay = day;
var originalMonth = month;
var originalYear = year;

if (window.location.pathname == '/') { //only run the calendar if homepage
  //otherwise in events page it will try to run it but cant access it
  getEachDay();
  var nextButton = document.getElementById("next-month-button");
  var prevButton = document.getElementById("prev-month-button");

  nextButton.addEventListener('click', getNextMonth);
  prevButton.addEventListener('click', getPrevMonth);
}

function getEachDay() {
  var newMonth = months[month] + " - " + year;

  //var monthHTML = Handlebars.templates.calendar({
    // currentMonth: newMonth
   //});
  var handleMonth = document.getElementById('this-month');

  handleMonth.innerHTML = newMonth;
  /////////////////////

  ////////////////////

  var totalDays = days[month];
  var tmpDate = new Date(year, month, 1);
  console.log("Creating Calendar");
  var k = tmpDate.getDay(); //gets the day the month starts on
  var dayNum = 1;
  totalDays += k;
  var postInfo;
  console.log("Our day:", originalDay);
  for(var i = 0; i < totalDays; i++) {
    if(i >= k) {  //if days have started for that month(i.e to get right day)
      postInfo = " ";
      postInfo = createEvent(dayNum, month, year, postInfo);

      var eventHTML = Handlebars.templates.calendarCard({
           dayNum: dayNum,
           postInfo: postInfo
      });

      var handlePosts = document.getElementById('get-day');
      handlePosts.insertAdjacentHTML('beforeend', eventHTML);
      //createEvent();
      if(dayNum == originalDay && month == originalMonth && year == originalYear) { //-1 because its in an array i.e. 0-x
        console.log("Current Day:", originalDay);
        var currentDayContainer = document.getElementsByClassName("days");
        currentDayContainer[dayNum-1].style.backgroundColor = "#FCFD49";
        currentDayContainer[dayNum-1].style.borderBottom = "2px solid black";

      }
      dayNum++;
    }
    else {
      var eventHTML = Handlebars.templates.calendarCard({
           dayNum: " - ",
           postInfo: " "
      });

      var handlePosts = document.getElementById('get-day');
      handlePosts.insertAdjacentHTML('beforeend', eventHTML);
    }
  }
}

function createEvent(day, month, year, postInfo) {
  var getEvents = document.getElementsByClassName("post");

    ///////////////////
    //////////////////
  var temp = [{
    info: "",
    index: ""
  }];

  for(var i = 0; i < getEvents.length; i++) {
    getEvents[i].style.display = 'none';
    var ourT = getEvents[i].getAttribute('data-title');
    var ourTime = getEvents[i].getAttribute('data-time');
    var ourMonth = getEvents[i].getAttribute('data-month');
    var ourDay = getEvents[i].getAttribute('data-day');
    var ourYear = getEvents[i].getAttribute('data-year');
    var ourIndex = getEvents[i].getAttribute('data-index');

    if(ourDay == day && ourMonth == months[month] && ourYear == year) {
      temp.push({
        info: ourT + " (" + ourTime + ")",
        index: ourIndex
      });
    }
    postInfo = temp;
  }

  return postInfo;
}

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
      //noMatchTwo[0].remove();
      noMatchThree[0].remove();
  }
}

/****************************************
**************** End Calendar ***********
****************************************/

/****************************************
**************** Modal ******************
****************************************/

// function insertNewEvent(description, photoURL, time, title) {
//
//   var postObj = {
//       description: description,
//       photoURL: photoURL,
//       time: time,
//       title: title
//   }
//
//   var postCardHTML = Handlebars.templates.postCard(postObj);
//   var postContainer = document.getElementById('posts');
//   postContainer.insertAdjacentHTML('beforeend', postCardHTML);
// }

function to12hr(time){
  var ampm;
  if(time.slice(0,2)>=12){
    ampm = "PM";
  }
  else{
    ampm = "AM";
  }
  var timeTemp = (time.slice(0,2)%12);
  if(timeTemp == 0){timeTemp = 12;}

  return (timeTemp.toString() + ':' + time.slice(3,5).toString() + ' ' + ampm);
}

function handleModalAcceptClick() {

  var addTitle = document.getElementById('event-title-input').value.trim();
  var addPhotoURL = document.getElementById('event-photo-input').value.trim();
  var addDescription = document.getElementById('event-description-input').value.trim();
  var addTime = document.getElementById('event-time-input').value.trim();
  var addDay = document.getElementById('event-day-input').value.trim();
  var addMonth = document.getElementById('event-month-input').value.trim();
  var addYear = document.getElementById('event-year-input').value.trim();

  var getEvents = document.getElementsByClassName("post");

  var addIndex = getEvents[getEvents.length-1].getAttribute('data-index'); //get our index from the last element
  addIndex++; //update one more to include next one
  var addMonth_idx;
  for (var i = 0; i < months.length; i++) {
      if (addMonth == months[i])
        addMonth_idx = i;
  }

  var addMonth_days = days[addMonth_idx];

  if (!addDescription || !addPhotoURL || !addTitle || !addDay || !addMonth || !addTime || !addYear) {
    alert("You must fill in all of the fields!");
    }
   else if (Number(addDay) > Number(addMonth_days)) {
    alert("You must enter in a valid day number!");
   }
   else if (addDay.includes("-") || addYear.includes("-") ) {
    alert("Please include valid numerical entries.");
   }
   else {
    addTime = to12hr(addTime);
    var eventHTML = Handlebars.templates.eventCard({ //first create handle bars thing for all areas, then store in postHTML
     description: addDescription,
     photoURL: addPhotoURL,
     title: addTitle,
     day: addDay,
     month: addMonth,
     time: addTime,
     index: addIndex,
     year: addYear
   });

   var postReq = new XMLHttpRequest();
   postReq.open('POST', '/addEvent');

   var reqBody = JSON.stringify({
     month: addMonth,
     day: addDay,
     year: addYear,
     title: addTitle,
     description: addDescription,
     time: addTime,
     index: addIndex,
     url: addPhotoURL
   });

   postReq.setRequestHeader('Content-Type', 'application/json');
   postReq.send(reqBody);

   var handleEventAdd = document.getElementById('posts');  //get posts elements
   handleEventAdd.insertAdjacentHTML('beforeend', eventHTML);
   deleteLastMonth(); //call this to delete the last calendar
   getEachDay();  //refresh calendar with new event

    hideAddEventModal();
  }
}

function showAddEventModal() {

  var showSomethingModal = document.getElementById('add-event-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.remove('hidden');
  //modalBackdrop.classList.remove('hidden');
}
function clearAddEventModalInputs() {
  /*
  * Initialized variables for each input in the modal
  var modalText = document.getElementById('post-text-input');
  var modalURL = document.getElementById('post-photo-input');
  var modalPrice = document.getElementById('post-price-input');
  var modalCity = document.getElementById('post-city-input');
  */
  var postTextInputElements = [
    document.getElementById('event-title-input'),
    document.getElementById('event-description-input'),
    document.getElementById('event-photo-input'),
    document.getElementById('event-time-input'),
    document.getElementById('event-day-input'),
    document.getElementById('event-month-input'),
    document.getElementById('event-year-input')
  ];

  /*
   * Clear any text entered in the text inputs.
   */
    postTextInputElements.forEach(function (inputElem) {
      inputElem.value = '';
    });
    /*
    * Attempt at trying to clear the modal screen when cancel is clicked
modalCancel.onclick = function(){
  modalText.value = "";
  modalURL.value = "";
  modalPrice.value = "";
  modalCity.value = "";
}
*/
}

function hideAddEventModal() {

  var showSomethingModal = document.getElementById('add-event-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.add('hidden');
//  modalBackdrop.classList.add('hidden');

  clearAddEventModalInputs();

}

var addEventButton = document.getElementById('add-event-button');
if (addEventButton) {
  addEventButton.addEventListener('click', showAddEventModal);
}

var modalAcceptButton = document.getElementById('modal-accept');
if (modalAcceptButton) {
  modalAcceptButton.addEventListener('click', handleModalAcceptClick);
}

var modalHideButtons = document.getElementsByClassName('modal-hide-button');
for (var i = 0; i < modalHideButtons.length; i++) {
  modalHideButtons[i].addEventListener('click', hideAddEventModal);
}

/****************************************
**************** End Modal **************
****************************************/

/****************************************
*************** List Events *************
****************************************/

function listEvents() {
  //alert('Button Pressed!');
}

var listEventsButton = document.getElementById('list-events-button');
if (listEventsButton) {
  listEventsButton.addEventListener('click', listEvents);
}

/****************************************
************* End List Events ***********
****************************************/
