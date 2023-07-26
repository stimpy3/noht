 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }

// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");
var k;
for (k = 0; k < myNodelist.length; k++) {
  var span = document.createElement("SPAN"); // creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
  var txt = document.createTextNode("\u00D7");// \u00D7 is unicode for x
  //Creates a new Text node. This method can be used to escape HTML characters.
  span.className = "close";
  span.appendChild(txt);
  myNodelist[k].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

 // Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

 if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}


 