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
function getBalance(amount) {

};
document.getElementById('calculate-btn').addEventListener('click', function () {
    // get income
    const incomeFild = document.getElementById('income');
    const incomeText = incomeFild.value;
    const incomeAmount = parseFloat(incomeText);
});