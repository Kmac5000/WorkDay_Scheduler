 

// elements
var centerCol = $(".centerCol");
var currentDay = $("#currentDay");
var hourCol = $(".hourCol");
var saveCol = $(".saveCol");
var row =$(".row")
// buttons
var saveBtn = $("#saveBtn");
var save9am = $("#save9am");
var save10am = $("#save10am");
var save11am = $("#save11am");
var save12pm = $("#save12pm");
var save1pm = $("#save1pm");
var save2pm = $("#save2pm");
var save3pm = $("#save3pm");
var save4pm = $("#save4pm");
var save5pm = $("#save5pm");

// text boxes individual
var text9am = $("#text9am");
var text10am = $("#text10am");
var text11am = $("#text11am");
var text12pm = $("#text12pm");
var text1pm = $("#text1pm");
var text2pm = $("#text2pm");
var text3pm = $("#text3pm");
var text4pm = $("#text4pm");
var text5pm = $("#text5pm");

// date and time
var currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().format("LT");

currentDay.text(currentDate);

 //grabs hour from each time slot and compares it to actual time
        function timeColor() {
    
    if (currentHour === hourCol) {
      row.addClass("present");
     }
     
     if (currentHour < hourCol) {
      row.removeClass("present");
      row.addClass("future");
     }

     if (currentHour > hourCol) {
      row.removeClass("future");
      row.addClass("past");
      }
  };

timeColor()


// save buttons



save9am.on("click", function () {
    var a9 = text9am.val()
    localStorage.setItem('text9am', a9);
});
save10am.on("click", function () {
    var a10 = text10am.val()
    localStorage.setItem('text10am', a10);
});
save11am.on("click", function () {
    var a11 = text11am.val()
    localStorage.setItem('text11am', a11);
});
save1pm.on("click", function () {
    var p1 = text1pm.val()
    localStorage.setItem('text1pm', p1);
});
save2pm.on("click", function () {
    var p2 = text2pm.val()
    localStorage.setItem('text2pm', p2);
});
save3pm.on("click", function () {
    var p3 = text3pm.val()
    localStorage.setItem('text3pm', p3);
});
save4pm.on("click", function () {
    var p4 = text4pm.val()
    localStorage.setItem('text4pm', p4);
});
save5pm.on("click", function () {
    var p5 = text5pm.val()
    localStorage.setItem('text5pm', p5);
});
save12pm.on("click", function () {
    var p12 = text12pm.val()
    localStorage.setItem('text12pm', p12);
});




function getValue() {
    localStorage.getItem('createItem');
}
getValue();
console.log(getValue)