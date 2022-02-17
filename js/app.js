// get total expences 
function getTotalExp() {
    const foodInputFild = document.getElementById('food-exp');
    const foodExp = parseFloat(foodInputFild.value);
    const rentInputFild = document.getElementById('rent-exp');
    const rentExp = parseFloat(rentInputFild.value);
    const lifestyleInputFild = document.getElementById('lifestyle-exp');
    const lifestyleExp = parseFloat(lifestyleInputFild.value);
    const totalExpences = foodExp + rentExp + lifestyleExp;
    return totalExpences;
};

function getBalance() {
    const totalExp = getTotalExp();
    // get income
    const incomeFild = document.getElementById('income');
    const incomeAmount = parseFloat(incomeFild.value);
    const balanceAmount = incomeAmount - totalExp;
    return balanceAmount;
};
// set balance 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalFild = document.getElementById('total-exp');
    totalFild.innerText = getTotalExp();
    const balanceFild = document.getElementById('balance');
    balanceFild.innerText = getBalance();
});