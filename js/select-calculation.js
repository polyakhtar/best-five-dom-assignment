// -----player selection function----
const players = [];

function select(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playersObj = {
        playerName: playerName
    };
    players.push(playersObj);

    if (players.length <= 5) {
        document.getElementById('selected-player-number').innerText = players.length;
        const select = element;
        select.innerText = 'selected';
        select.setAttribute('disabled', true);
        console.log(select);
    } else {
        return alert("You can't add more than 5 Players");
    }
    setPlayerName(players);
}

function setPlayerName(nameList) {
    const tableBody = document.getElementById('selected-player-list');
    tableBody.innerHTML = '';
    for (let i = 0; i < nameList.length; i++) {
        const names = nameList[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <th scope="row">${i + 1}</th>
          <td>${names}</td>
          `;
        tableBody.appendChild(tr);
    }
}
// ---common function---
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
//--- calculate total cost for  player----
document.getElementById('btn-calculate').addEventListener('click', function () {


    const perPlayerCost = getInputFieldValueById('per-player-cost-field')
    const totalPlayerCost = getTextElementById('total-player-cost');
    if (isNaN(totalPlayerCost) || totalPlayerCost < 0) {
        return alert('You should be type a number')
    }

    const newTotalPlayerCost = 5 * perPlayerCost;
    if (isNaN(newTotalPlayerCost)) {
        return alert('You should be type a number')
    }
    setTextElementValueById('total-player-cost', newTotalPlayerCost);

});
// ---calculate to cost for player,manager and coach---

document.getElementById('btn-calculate-total-expense').addEventListener('click', function () {
    const totalPlayerCost = getTextElementById('total-player-cost');
    const managerCost = getInputFieldValueById('manager-cost-field');
    const coachCost = getInputFieldValueById('coach-cost-field');

    if (isNaN(managerCost) || isNaN(coachCost)) {
        return alert('You should be type a number')
    } else if (managerCost < 0 || coachCost < 0) {
        return alert('Negative Number not allowed');
    }

    const totalCost = totalPlayerCost + managerCost + coachCost;

    setTextElementValueById('total-cost', totalCost);


})
