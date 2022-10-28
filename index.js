const year = +prompt("Введіть свій рік народження!", "");
let answerYear;
if (!year) {
  answerYear = "";
  alert("Шкода, що Ви не захотіли ввести рік народження...");
} else {
  answerYear = `Твій вік ${2022 - year}.`;
}

const town = prompt("Введіть місто, в якому Ви живете!", "");
let answerTown;
if (!town) {
  answerTown = "";
  alert("Шкода, що Ви не захотіли ввести місто...");
} else {
  if (town === "Київ") {
    answerTown = `Ви жевете у столиці України - ${town}.`;
  } else if (town === "Вашингтон") {
    answerTown = `Ви жевете у столиці CША - ${town}.`;
  } else if (town === "Лондон") {
    answerTown = `Ви жевете у столиці Иеликобританії - ${town}.`;
  } else {
    answerTown = `Ви жевете у місті ${town}.`;
  }
}

const sport = prompt("Введіть свій улюбдений вид спорту!", "");
let answerSport;
if (!sport) {
  answerSport = "";
  alert("Шкода, що Ви не захотіли ввести вид спорту...");
} else if (sport === "футбол") {
  answerSport = "Круто. Хочешь стати Пеле?";
} else if (sport === "баскетбол") {
  answerSport = "Круто. Хочешь стати Оскаром Шмідтом?";
} else if (sport === "теніс") {
  answerSport = "Круто. Хочешь стати Рафаелем Надалем?";
} else {
  answerSport = `Ваш улюблений вид спорту ${sport}.`;
}

if (answerYear || answerTown || answerSport) {
  alert(`${answerYear} ${answerTown} ${answerSport}`);
} else {
  alert("Не вказано жодних даних");
}
