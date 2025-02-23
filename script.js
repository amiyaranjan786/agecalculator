const ageInput = document.querySelector('.input-field');
const calculateBtn = document.querySelector('.calculate-btn');
const yearsSpan = document.querySelector('#years');
const monthsSpan = document.querySelector('#months');
const daysSpan = document.querySelector('#days');



//Set max date to today (prevents future dates): toISOString() converts date to "YYYY-MM-DDTHH:mm-ss.sssZ",split("T")[0] extracts "YYYY-MM-DD"
ageInput.max = new Date().toISOString().split("T")[0];

//function to calculate age
function calcualteAge(){
  const birthDate = new Date(ageInput.value);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();
  
  //here adjust would be negative month and date
  if(ageMonths < 0 || (ageMonths ===0 && ageDays < 0)){
    ageYears--;
    ageMonths += 12;
  }
  if(ageDays < 0){
    //In here you can find the last month 
    const lastMonth = new Date(today.getFullYear(),today.getMonth() -1,0);

    ageMonths--;
    ageDays += lastMonth.getDate();
  }
  // Here displayed the calculated age that what you are entered
  yearsSpan.textContent = ageYears;
  monthsSpan.textContent = ageMonths;
  daysSpan.textContent = ageDays;
}

calculateBtn.addEventListener('click',calcualteAge);
