 const bill = document.getElementById('bill');
 const numOfPeople = document.getElementById('num-of-people');
 const customTip = document.getElementById('custom-tip-btn');
 const errorMsg = document.getElementById('error-msg');
 const tipPerPerson = document.getElementById('tip-per-person');
 const totalPerPerson = document.getElementById('total-per-person');
 const resetBtn = document.getElementById('reset-btn');
 const tipBtns = document.querySelectorAll('input[type="radio"]');
 
 let billValue;
 let numOfPeopleValue;
 let customTipValue;
 let tipId;
 let tip;
 let noTipTotalPerPerson;
 let individualTip;
 let total;

 bill.addEventListener('input', () => {
    billValue = Number(bill.value);
    calculateTip();
    enableResetBtn();
 })

 numOfPeople.addEventListener('input', () => {
   enableResetBtn();

if (numOfPeople.value === '0') {
  errorMsg.style.display = 'inline-block';
  numOfPeople.style.borderColor = 'var(--error)';
} else {
    numOfPeopleValue = Number(numOfPeople.value);
  errorMsg.style.display = 'none';
  numOfPeople.style.borderColor = 'var(--strong-cyan)';
    calculateTip();
}

 })

 customTip.addEventListener('input', () => {
     customTipValue = Number(customTip.value);
     enableResetBtn();
     calculateTip();

 })

customTip.addEventListener('click', () => {
   tipBtns.forEach(btn => {
      btn.checked = false;
   })
})

tipBtns.forEach(btn => {
   btn.addEventListener('click', () => {
    enableResetBtn();
      tipId = Number(btn.id);
      customTip.value = '';
      calculateTip();
   })
})


 function calculateTip() {
    if (customTipValue) {
        tip = customTipValue;
      } else {
        tip = tipId;
      }

   noTipTotalPerPerson = billValue / numOfPeopleValue;
   individualTip = noTipTotalPerPerson * (tip / 100);

   tipPerPerson.innerHTML = (individualTip) ? Math.floor(individualTip * 100) / 100 : '$0.00';
   total = noTipTotalPerPerson + individualTip;
   totalPerPerson.innerHTML = total ? Math.round(total * 100) / 100 : '$0.00';
}


function disableResetBtn() {
   resetBtn.classList.add('empty');
}

function enableResetBtn() {
   resetBtn.classList.remove('empty');
}
 

function clearInput(inputs) {
   inputs.forEach(input => input.value = '')
}

resetBtn.addEventListener('click', () => {
 disableResetBtn();
 tipPerPerson.innerHTML = '$0.00';
 totalPerPerson.innerHTML = '$0.00';
 clearInput([bill, numOfPeople, customTip]);
 
 billValue = undefined;
 numOfPeopleValue = undefined;
 customTipValue = undefined;
 tipId = undefined;
 tip = undefined;
 noTipTotalPerPerson = undefined;
 individualTip = undefined;
 total = undefined;

 tipBtns.forEach(btn => {
   btn.checked = false;
 })
})

