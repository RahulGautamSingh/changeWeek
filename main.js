const left = document.querySelector(".left");
const right = document.querySelector(".right");
const days = document.querySelectorAll(".day");
let date = Date.now();
let first;
let last;
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
days.forEach((elem, index) => {
  if (index === 0) first = date;

  elem.innerText =
    "" + months[new Date(date).getMonth() - 1] + " " + new Date(date).getDate();
  date += 86400000;
});

left.addEventListener("click", (e) => {
  first -= 7 * 86400000;
  date = first;

  days.forEach((elem) => {
    console.log(date);

    elem.innerText =
      "" +
      months[new Date(date).getMonth() - 1] +
      " " +
      new Date(date).getDate();
    date += 86400000;
  });
});

right.addEventListener("click", (e) => {
  first += 7 * 86400000;
  date = first;

  days.forEach((elem) => {
    console.log(date);
    elem.innerText =
      "" +
      months[new Date(date).getMonth() - 1] +
      " " +
      new Date(date).getDate();
    date += 86400000;
  });
});
