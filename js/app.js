function getincomeAmount() {
    const incomeFild = document.getElementById('income');
    const incomeText = incomeFild.value;
    const incomeAmount = parseFloat(incomeText);
    const negativeFild = document.getElementById('income-negative')
    const emptyFild = document.getElementById('income-empty')
    if (incomeFild.value < 0) {
        negativeFild.style.display = 'block';
        emptyFild.style.display = 'none';
    }
    else if (incomeFild.value == 0) {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'block';
    }
    else {
        negativeFild.style.display = 'none';
        emptyFild.style.display = 'none';
        return incomeAmount;
    }
}
// get total expences 
function getTotalExp() {
    const foodExp = setExpItem('food');
    const rentExp = setExpItem('rent');
    const lifestyleExp = setExpItem('lifestyle');
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
    }
});
// error handling for negative number
function setExpItem(itemId) {
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
    }
}
// saving 