/****************************************
**************** Calendar ***************
****************************************/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
      if(dayNum-1 == originalDay && month == originalMonth && year == originalYear) { //-1 because its in an array i.e. 0-x
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
  for(var i = 0; i < getEvents.length; i++) {
    getEvents[i].style.display = 'none';
    var ourT = getEvents[i].getAttribute('data-title');
    var ourTime = getEvents[i].getAttribute('data-time');
    var ourMonth = getEvents[i].getAttribute('data-month');
    var ourDay = getEvents[i].getAttribute('data-day');
    var ourYear = getEvents[i].getAttribute('data-year');
    if(ourDay == day && ourMonth == months[month] && ourYear == year) {
      var temp = ourT + " (" + ourTime + ")";
      postInfo = temp;
    }

  }
  return postInfo;
  /*var buttonListener = document.getElementsByClassName("view-event-button");
  for(var i = 0; i < buttonListener.length; i++) {
    buttonListener[i].addEventListener('click', getEvents);
  }*/
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
      noMatchTwo[0].remove();
      noMatchThree[0].remove();
  }
}

/****************************************
**************** End Calendar ***********
****************************************/

// function insertNewEvent(description, photoURL, time, title) {
//
//     var postObj = {
//         description: description,
//         photoURL: photoURL,
//         time: time,
//         title: title
//     }
//
//     var postCardHTML = Handlebars.templates.postCard(postObj);
//     var postContainer = document.getElementById('posts');
//     postContainer.insertAdjacentHTML('beforeend', postCardHTML);
// }

/****************************************
**************** Modal ******************
****************************************/

function handleModalAcceptClick() {

  var title = document.getElementById('event-title-input').value.trim();
  var photoURL = document.getElementById('event-photo-input').value.trim();
  var description = document.getElementById('event-description-input').value.trim();
  var time = document.getElementById('event-time-input').value.trim();
  var day = document.getElementById('event-day-input').value.trim();
  var month = document.getElementById('event-month-input').value.trim();

  if (!description || !photoURL || !title || !day || !month || !time) {
    alert("You must fill in all of the fields!");
  } else {

    hideAddEventModal();

  }

}

function showAddEventModal() {

  var showSomethingModal = document.getElementById('add-event-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}

function clearAddEventModalInputs() {

  var postTextInputElements = [
    document.getElementById('post-text-input'),
    document.getElementById('post-photo-input'),
    document.getElementById('post-price-input'),
    document.getElementById('post-city-input')
  ];

  /*
   * Clear any text entered in the text inputs.
   */
  postTextInputElements.forEach(function (inputElem) {
    inputElem.value = '';
  });

  /*
   * Grab the originally checked radio button and make sure it's checked.
   */
  var checkedPostConditionButton = document.querySelector('#post-condition-fieldset input[checked]');
  checkedPostConditionButton.checked = true;

}

function hideAddEventModal() {

  var showSomethingModal = document.getElementById('add-event-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  showSomethingModal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');

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
