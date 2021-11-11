let list = document.getElementById("list");
let newTask = document.getElementById("newTask");

// ---| Add new task |---//

document.getElementById("addTask").addEventListener("click", () => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li>${newTask.value}<span class="close">&#215</span></li>`
  );

  newTask.value = "";
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
});

// ---| Create a "close" button |---//

var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// ---| Click on a close button to hide the task |---//

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  console.log(i);
  console.log(close);
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// ---|  Add a "checked" symbol |---//

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
