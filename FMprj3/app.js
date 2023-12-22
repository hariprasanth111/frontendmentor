function validationWarning(msgEl, inputEl, labelEl, msgName) {
  msgEl.className = "msg";
  inputEl.className = "border-red";
  labelEl.className = "label";
  msgEl.innerText = `Must be a valid ${msgName}`;
}

function counterAnime(index, valueEl) {
  let i = 0;
  let count = setInterval(() => {
    outputEl[index].innerText = i;

    i++;

    if (i > valueEl) {
      clearInterval(count);
    }
  }, 30);
}

// input fields
let yearEl = document.querySelector("#year");
let monthEl = document.querySelector("#month");
let dateEl = document.querySelector("#day");
// for svg
let submit = document.querySelector(".svg");
// validation msg
let yearOutput = document.querySelector("#msg-yy");
let monthOutput = document.querySelector("#msg-mm");
let dateOutput = document.querySelector("#msg-dd");
// get date
const date = new Date();
const year = date.getFullYear();
const monthMM = date.getMonth(); // Zero-based (January is 0)
const month = monthMM + 1;
const day = date.getDate();
// result field
let resultDD = document.querySelector(".no-dd");
let resultMM = document.querySelector(".no-mm");
let resultYY = document.querySelector(".no-yy");
// labels
let dayLabel = document.querySelector(".day-h");
let monthLabel = document.querySelector(".month-h");
let yearLabel = document.querySelector(".year-h");
let outputEl = document.querySelectorAll(".count");
// flag variable
let x = 0;
// validations
let validations = () => {
  // get values
  let ddValue = dateEl.value;
  let mmValue = monthEl.value;
  let yyValue = yearEl.value;

  //   general validations

  if (
    yyValue >= year &&
    (mmValue > 12 || mmValue < 1) &&
    (ddValue > 31 || ddValue < 1)
  ) {
    yearOutput.className = "msg";
    dateOutput.className = "msg";
    monthOutput.className = "msg";
    monthOutput.innerText = "Must be a valid month";
    dateOutput.innerText = "Must be a valid date";
    yearOutput.innerText = "Must be a valid year";
    yearEl.className = "border-red";
    monthEl.className = "border-red";
    dayLabel.className = "label";
    monthLabel.className = "label";
    yearLabel.className = "label";
    dateEl.className = "border-red";
    x = 1;
  } else {
    // date validaton
    // febrary validation
    if (mmValue === "2") {
      if ((Number(yyValue) % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (ddValue > 29) {
          validationWarning(dateOutput, dateEl, dayLabel, "date");
          x = 1;
        }
      } else {
        if (ddValue > 28) {
          validationWarning(dateOutput, dateEl, dayLabel, "date");
          x = 1;
        }
      }
    }

    if (ddValue > 31 || ddValue < 1 || ddValue === "") {
      validationWarning(dateOutput, dateEl, dayLabel, "date");
      x = 1;
    }

    // month validation
    if (mmValue > 12 || mmValue < 1 || mmValue === "") {
      validationWarning(monthOutput, monthEl, monthLabel, "month");
      x = 1;
    }

    // year validation
    if (yyValue < 1800 || yyValue >= year || mmValue === "") {
      validationWarning(yearOutput, yearEl, yearLabel, "year");
      x = 1;
    }
    if (mmValue === "" && ddValue === "" && yyValue === "") {
      yearOutput.className = "msg";
      dateOutput.className = "msg";
      monthOutput.className = "msg";
      monthOutput.innerText = "The fied is required";
      dateOutput.innerText = "The fied is required";
      yearOutput.innerText = "The fied is required";
      yearEl.className = "border-red";
      monthEl.className = "border-red";
      dayLabel.className = "label";
      monthLabel.className = "label";
      yearLabel.className = "label";
      dateEl.className = "border-red";
      x = 1;
    }
  }
};
//calculation logic
let val, dateVal, yrValue;
let logics = () => {
  yearOutput.className = "none";
  dateOutput.className = "none";
  monthOutput.className = "none";

  yearEl.classList.remove("border-red");
  monthEl.classList.remove("border-red");
  dayLabel.classList.remove("label");
  monthLabel.classList.remove("label");
  yearLabel.classList.remove("label");
  dateEl.classList.remove("border-red");
  let ddValue = dateEl.value;
  let mmValue = monthEl.value;
  let yyValue = yearEl.value;

  let mm31 = [1, 3, 5, 7, 8, 10, 12];
  let mm30 = [2, 4, 6, 9, 11];

  yrValue = year - yyValue;

  if (mmValue > month) {
    val = 12 - mmValue + month;
    yrValue--;
  } else if (mmValue <= month) {
    val = month - mmValue;
  }

  if (mm31.includes(Number(mmValue))) {
    if (ddValue >= 1 && ddValue <= 17) {
      dateVal = 31 - ddValue + day - 31;
    } else if (ddValue >= 18 && ddValue <= 31) {
      dateVal = 31 - ddValue + day;
      val = val - 1;
    }
  } else if (mm30.includes(Number(mmValue))) {
    if (ddValue >= 1 && ddValue <= 17) {
      dateVal = 30 - ddValue + day - 30;
    } else if (ddValue >= 18 && ddValue <= 30) {
      dateVal = 31 - ddValue + day;
      val = val - 1;
    }
  }
  // number animation

  counterAnime(0, yrValue);
  counterAnime(1, val);
  counterAnime(2, dateVal);
};

// enter key code
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    validations();
    if (x === 1) {
      x++;
      return;
    } else {
      logics();
    }
  } else {
    return;
  }
});

submit.addEventListener("click", () => {
  validations();
  if (x === 1) {
    x++;
    return;
  } else {
    logics();
  }
});
