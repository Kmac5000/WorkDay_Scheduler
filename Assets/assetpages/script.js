 

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

// time var
var hourll = $("#hour11");
// date and time
var currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().format("LT");
var hour = $("#hour");
currentDay.text(currentDate);

var row9 = $("#row9");
var hourll = $("#hour11");
//grabs hour from each time slot and compares it to actual time
function timeTracker() {
        
        var timeNow = currentHour;

        // loop over time blocks
        row.each(function () {
            
            if (hourCol > timeNow) {
                row.removeClass("future");
                row.removeClass("present");
                row.addClass("past");
            }
            else if (hourCol === timeNow) {
                row.removeClass("past");
                row.removeClass("future");
                row.addClass("present");
            }
            else {
                row.removeClass("present");
                row.removeClass("past");
                row.addClass("future");

            }
        })
}
// save buttons
timeTracker();


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


text9am.text(localStorage.getItem('text9am'));
text10am.text(localStorage.getItem('text10am'));
text11am.text(localStorage.getItem('text11am'));
text12pm.text(localStorage.getItem('text12pm'));
text1pm.text(localStorage.getItem('text1pm'));
text2pm.text(localStorage.getItem('text2pm'));
text3pm.text(localStorage.getItem('text3pm'));
text4pm.text(localStorage.getItem('text4pm'));
text5pm.text(localStorage.getItem('text5pm'));
