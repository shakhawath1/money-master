// get calculate item
function getCalculateItem(itemId) {
    const negativeFild = document.getElementById(itemId + '-negative');
    const emptyFild = document.getElementById(itemId + '-empty');
    const amountFild = document.getElementById(itemId + '-amount');
    // error handling for negative number
    if (amountFild.value < 0) {
        negativeFild.style.display = 'block';
        emptyFild.style.display = 'none';
    }
    else if (amountFild.value == 0) {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'block';
    }
    else {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'none';
        return parseFloat(amountFild.value);
    };
};
// get total expences 
function getTotalExp() {
    const foodExp = getCalculateItem('food');
    const rentExp = getCalculateItem('rent');
    const lifestyleExp = getCalculateItem('lifestyle');
    const totalExpences = foodExp + rentExp + lifestyleExp;
    return totalExpences;
};
// calculate part
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getCalculateItem('income');
    const totalExp = getTotalExp();
    const expencesFild = document.getElementById('total-exp');
    const balanceFild = document.getElementById('balance');
    if (incomeAmount < totalExp) {
        alert('please reduce your expences.');
    }
    else {
        const balance = incomeAmount - totalExp;
        balanceFild.innerText = balance;
        expencesFild.innerText = totalExp;
    };
});
// savings calculate
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = getCalculateItem('income');
    const savingPercent = getCalculateItem('percent');
    const savingAmount = incomeAmount * (savingPercent / 100);
    const savingFild = document.getElementById('saving-amount');
    savingFild.innerText = savingAmount;
    // remaining balance
    const remainingFild = document.getElementById('remaining-balance');
    const balanceFild = document.getElementById('balance');
    const balance = parseFloat(balanceFild.innerText);
    if (savingAmount > balance) {
        remainingFild.innerText = balance;
        savingFild.innerText = 'You have no enough money for savings.'
    }
    else if (savingAmount <= balance) {
        const remainingAmount = balance - savingAmount;
        remainingFild.innerText = remainingAmount;
    }
});

