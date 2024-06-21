 const bill = document.getElementById('bill');
 const numOfPeople = document.getElementById('num-of-people');

 const customTip = document.getElementById('custom-tip-btn');
 
 let billValue = undefined;
 let numOfPeopleValue = undefined;
let customTipValue = undefined;
const tipBtns = document.querySelectorAll('input[type="radio"]');



 bill.addEventListener('input', () => {
    billValue = bill.value;
    // console.log(billValue)
    calculateTip()
 })

 function calculateTip() {

    tipBtns.forEach(btn => {
        btn.addEventListener('click', () => {
                tipId = btn.id; 
                customTipValue = '';
        })
    })
    
    console.log(tipId)
    let tip = (!customTipValue) ? tipId : customTipValue;    
}


 numOfPeople.addEventListener('input', () => {
    numOfPeopleValue = numOfPeople.value;
    calculateTip()
 })

 customTip.addEventListener('input', () => {
     customTipValue = customTip.value;
     console.log(customTipValue)
    calculateTip()

 })

 

