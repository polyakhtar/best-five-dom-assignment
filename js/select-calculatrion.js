

// ---common js fuction start-----
function getInputFieldValueById(inputId) {
    const inputFieldValue = document.getElementById(inputId);
    const inputValueString = inputFieldValue.value;
    const inputValue = parseFloat(inputValueString);
    inputFieldValue.value = '';
    return inputValue;
}
function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
// --------common js function end-------


// ----calculate total cost for all player----
document.getElementById('btn-calculate').addEventListener('click', function () {


    const perPlayerCost = getInputFieldValueById('per-player-cost-field')

    const totalPlayerCost = getTextElementById('total-player-cost');

    const newTotalPlayerCost = 5 * perPlayerCost;

    setTextElementValueById('total-player-cost', newTotalPlayerCost);

});
// ---calculate total cost for player,coach and manager----
document.getElementById('btn-calculate-total-expense').addEventListener('click', function () {

    const managerCost = getInputFieldValueById('manager-cost-field');
    const coachCost = getInputFieldValueById('coach-cost-field');
    const totalPlayerCost = getTextElementById('total-player-cost');
    const totalCost = managerCost + coachCost + totalPlayerCost;

    setTextElementValueById('total-cost', totalCost);


})