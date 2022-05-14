 

// elements
var centerCol = $(".centerCol");
var currentDay = $("#currentDay");
var hourCol = $(".hourCol");
var saveCol = $(".saveCol");
var row =$(".row")
// buttons
var saveBtn = $("#saveBtn");
var save1 = $("#save1");
var save2pm= $("#save2pm")



// text boxes individual
var text1 = $("#text1");
var text2pm = $("#text2pm")

var currentDate = moment().format("dddd, MMMM Do, YYYY");
var currentHour = moment().format("LT");

currentDay.text(currentDate);

// centerCol text needs to be saved to local memory

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


save2pm.on("click", createItem);

function createItem() {
    var a = text2pm.val()

    localStorage.setItem('text2pm', a );
}

createItem();


function getValue() {
    return localStorage.getItem('centerCol');
}
getValue();
console.log(getValue)