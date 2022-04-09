const returnDiv = document.getElementById('return-div');
const typeOneWay = document.getElementById('one-way');
const typeReturn = document.getElementById('return');
const returning = document.getElementById("returning");


typeOneWay.onchange = () => {
    returnDiv.style.display = "none";
    returning.removeAttribute("required");
};

typeReturn.onchange = () => {
    returnDiv.style.display = "inline-block";
    returning.setAttribute("required", "");
};

console.log(returnDiv);
console.log(typeOneWay);
console.log(typeReturn);
console.log(returning);