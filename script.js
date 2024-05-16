var parent_div = document.createElement("div");
parent_div.className = "main";

var input_data = document.createElement("input");
input_data.setAttribute("type", "date");
input_data.setAttribute("id", "dob");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "Display Date";
button.addEventListener("click", display_date);

parent_div.append(input_data, button);
document.body.append(parent_div);

function display_date() {
  var input = document.getElementById("dob").value;
  var inputdate = new Date(input);
  var currentdate = new Date();

  var millisec =
    parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
  var second = Math.floor(millisec / 1000);
  var minute = Math.floor(second / 60);
  var hour = Math.floor(minute / 60);
  var day = Math.floor(hour / 24);
  var year = currentdate.getFullYear() - inputdate.getFullYear();
  var month = year * 12 + (currentdate.getMonth() - inputdate.getMonth());
  console.log(inputdate.getMonth());

  let data = document.createElement("div");
  data.className = "data";

  let para0 = document.createElement("p");
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");
  let para3 = document.createElement("p");
  let para4 = document.createElement("p");
  let para5 = document.createElement("p");
  let para6 = document.createElement("p");
  let para7 = document.createElement("p");

  para0.innerHTML = `${currentdate}`;
  para1.innerHTML = `Years: ${year}`;
  para2.innerHTML = `Months: ${month}`;
  para3.innerHTML = `Days: ${day}`;
  para4.innerHTML = `Hours: ${hour}`;
  para5.innerHTML = `Minutes: ${minute}`;
  para6.innerHTML = `Seconds:    ${second}`;
  para7.innerHTML = `MilliSeconds: ${millisec}`;

  console.log(data);

  data.append(para0, para1, para2, para3, para4, para5, para6, para7);
  document.body.append(data);
}
