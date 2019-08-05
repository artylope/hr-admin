var dates = document.querySelectorAll('.DayPicker-Day[tabindex="-1"],.DayPicker-Day[tabindex="0"]');
// var dates = document.querySelectorAll('[tabindex="-1"]');
// console.log(dates);

var selectedDates = [];

var convertDate = function(dateString){
  var dateArray = dateString.split(" ");
  // console.log(dateArray);
  var day = dateArray[0];
  var month = dateArray[1];
  var date = dateArray[2];

  switch(month) {
  case "Jan":
    month = '01';
    break;
  case "Feb":
    month = '02';
    break;
  case "Mar":
    month = '03';
    break;
  case "Apr":
    month = '04';
    break;
  case "May":
    month = '05';
    break;
  case "Jun":
    month = '06';
    break;
  case "Jul":
    month = '07';
    break;
  case "Aug":
    month = '08';
    break;
  case "Sep":
    month = '09';
    break;
  case "Oct":
    month = '10';
    break;
  case "Nov":
    month = '11';
    break;
  case "Dec":
    month = '12';
    break;
  }

  var year = dateArray[3];

  var newDateString = year + '-' + month + '-' + date;
  return newDateString;
}

let clickSelect = function(event){
  // console.log(event.target.attributes[3].value);
  // console.log(event.target.classList);
  event.target.classList.add("selected");
  event.target.removeEventListener("click",clickSelect)
  event.target.addEventListener("click",clickDeselect)

  var dateString = event.target.attributes[3].value;
  var newDateString = convertDate(dateString);
  selectedDates.push(newDateString);
  console.log(selectedDates);

} ;

let clickDeselect = function(event){
  // console.log(event.target.classList);
  event.target.classList.remove("selected");
  event.target.removeEventListener("click",clickDeselect);
  event.target.addEventListener("click",clickSelect);

  var dateString = event.target.attributes[3].value;
  var newDateString = convertDate(dateString);
  for (var i = 0 ; i < selectedDates.length; i++ ) {
    if (selectedDates[i] === newDateString) {
        selectedDates.splice(i, 1);
        break;
    }
}
  console.log(selectedDates);

}

for (var i = 0 ; i < dates.length; i++) {
   dates[i].addEventListener('click' ,clickSelect)
}




var submitButton = document.createElement('button');
var leaveForm = document.querySelector('#leave-form');
submitButton.innerText = "Apply Leave";
leaveForm.appendChild(submitButton);


submitButton.addEventListener('click', function(event){
  console.log('apply leave');
  var userId = parseInt(getCookie('user_id'));
  var managerId = parseInt(getCookie('manager_id'));
  console.log(userId);
  console.log(managerId);
  sendForm(userId, managerId);
})


//function to get cookie
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}


var sendForm = function(userId, managerId){

  var data = {
    "staff_id": userId,
    "manager_id": managerId,
    "leave_type": document.querySelector("#leave-type").value,
    "dates": selectedDates,
    "request_status": 'submitted'
};

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var theUrl = "/applynewleave";

  xmlhttp.addEventListener("load", function(){

    console.log("DONE");
    console.log( this.responseText );
  });

  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

  return;
};
