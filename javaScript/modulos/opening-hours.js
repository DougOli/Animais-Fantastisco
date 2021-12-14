export default function openingHours() {}

const opening = document.querySelector("[data-week]");
const weekDay = opening.dataset.week.split(",").map(Number);
const weekHours = opening.dataset.hours.split(",").map(Number);

const dateToday = new Date();
const today = dateToday.getDay();
const hoursNow = dateToday.getHours();

const weekOpening = weekDay.indexOf(today) !== -1;

const openHours = hoursNow >= weekHours[0] && hoursNow < weekHours[1];

if (weekOpening && openHours) {
  opening.classList.add("open");
}
