// get income amount
function getincomeAmount() {
    const incomeFild = document.getElementById('income');
    const incomeText = incomeFild.value;
    const incomeAmount = parseFloat(incomeText);
    const negativeFild = document.getElementById('income-negative');
    const emptyFild = document.getElementById('income-empty');
    if (incomeText < 0) {
        negativeFild.style.display = 'block';
        emptyFild.style.display = 'none';
    }
    else if (incomeText == 0) {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'block';
    }
    else {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'none';
        return incomeAmount;
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
    const incomeAmount = getincomeAmount();
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
// get calculate item
function getCalculateItem(itemId) {
    const negativeFild = document.getElementById(itemId + '-negative');
    const emptyFild = document.getElementById(itemId + '-empty');
    const expFild = document.getElementById(itemId + '-exp');
    // error handling for negative number
    if (expFild.value < 0) {
        negativeFild.style.display = 'block';
        emptyFild.style.display = 'none';
    }
    else if (expFild.value == 0) {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'block';
    }
    else {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'none';
        return parseFloat(expFild.value);
    };
};
//  get saving percent
function getSavingPercent() {
    const percentFild = document.getElementById('percent-fild');
    const percentText = percentFild.value;
    const percent = parseFloat(percentText);
    const negativeFild = document.getElementById('percent-negative');
    const emptyFild = document.getElementById('percent-empty');
    if (percentFild.value < 0) {
        negativeFild.style.display = 'block';
        emptyFild.style.display = 'none';
    }
    else if (percentFild.value == 0) {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'block';
    }
    else {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'none';
        return percent;
    };
};
// savings calculate
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = getincomeAmount();
    const savingPercent = getSavingPercent();
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

