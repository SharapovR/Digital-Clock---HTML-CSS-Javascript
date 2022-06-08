// document.getElementById("submit").addEventListener("click", submit)

// function submit(e) {
//    e.preventDefault()
//    let name = document.getElementById("name").value
//    let lastName = document.getElementById("lastName").value

//    let user = {
//       name,
//       lastName,
//    }
//    localStorage.setItem("data", JSON.stringify(user))
// }

// function show() {
//    let user = JSON.parse(localStorage.getItem("data"))
//    let h1 = document.createElement("h1")
//    h1.textContent = user.name
//    let h2 = document.createElement("h2")
//    h2.textContent = user.lastName

//    document.body.append(h1, h2)
// }



// 1Home work

// document.getElementById("Buy").addEventListener("click", submit)

// function submit(e) {
//    e.preventDefault()
//    let name = document.getElementById("name").value
//    let lastName = document.getElementById("lastName").value

//    let user = {
//       name,
//       lastName,
//    }
//    localStorage.setItem("data", JSON.stringify(user))
// }

// function show() {
//    let user = JSON.parse(localStorage.getItem("data"))
//    let h1 = document.createElement("h1")
//    h1.textContent = user.name
//    let h2 = document.createElement("h2")
//    h2.textContent = user.lastName

//    document.body.append(h1, h2)
// }


// 2Home work


function updateClock() {
   let now = new Date();
   let dname = now.getDay()
   let mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

   if (hou == 0) {
      hou = 12;
   }
   if (hou > 12) {
      hou = hou - 12;
      pe = "PM";
   }


   Number.prototype.pad = function (digist) {
      let n
      for (n = this.toString(); n.length < digist; n = 0 + n);
      return n;
   }


   let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];

   let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

   let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

   for (let i = 0; i < ids.length; i++)
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock() {
   updateClock();
   window.setInterval("updateClock()", 1);
}