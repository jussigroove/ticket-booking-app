const returnDiv = document.getElementById('return-div');
const typeOneWay = document.getElementById('one-way');
const typeReturn = document.getElementById('return');
const returning = document.getElementById("returning");


const form = document.getElementById('form');
const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const addressInput = document.getElementById('address');
const passOneFnameInput = document.getElementById('pass-one-fname');
const passOneLnameInput = document.getElementById('pass-one-lname');
const passTwoFnameInput = document.getElementById('pass-two-fname');
const passTwoLnameInput = document.getElementById('pass-two-lname');
const passThreeFnameInput = document.getElementById('pass-three-fname');
const passThreeLnameInput = document.getElementById('pass-three-lname');
const passOneAgeInput = document.getElementById('pass-one-age');
const passTwoAgeInput = document.getElementById('pass-two-age');
const passThreeAgeInput = document.getElementById('pass-three-age');





form.addEventListener('submit', e => {
    const setError = (input, message) => {
        e.preventDefault();
        const messageSpace = input.parentElement;
        const small = messageSpace.querySelector('small');
    
        small.innerText = message;
        messageSpace.className = 'message-space error';
    };
    
    const setSuccess = input => {
        const messageSpace = input.parentElement;
        messageSpace.className = 'message-space success';
    };

    const fromValue = fromInput.value.trim();
    const toValue = toInput.value.trim();
    const emailValue = emailInput.value.trim();
    const mobileValue = mobileInput.value.trim();
    const addressValue = addressInput.value.trim();
    const passOneFnameValue = passOneFnameInput.value.trim();
    const passOneLnameValue = passOneLnameInput.value.trim();
    const passTwoFnameValue = passTwoFnameInput.value.trim();
    const passTwoLnameValue = passTwoLnameInput.value.trim();
    const passThreeFnameValue = passThreeFnameInput.value.trim();
    const passThreeLnameValue = passThreeLnameInput.value.trim();
    const passOneAgeValue = passOneAgeInput.value;
    const passTwoAgeValue = passTwoAgeInput.value;
    const passThreeAgeValue = passThreeAgeInput.value;

    if (fromValue === '') {
        fromInput.focus();
        setError(fromInput, 'This field cannot be empty');
    } else {
        setSuccess(fromInput);
    }

    if (toValue === '') {
        toInput.focus();
        setError(toInput, 'This field cannot be empty');
    } else {
        setSuccess(toInput);
    }

    if (emailValue === '') {
        emailInput.focus();
        setError(emailInput, 'This field cannot be empty');
    } else {
        setSuccess(emailInput);
    }

    if (mobileValue === '') {
        mobileInput.focus();
        setError(mobileInput, 'This field cannot be empty');
    } else {
        setSuccess(mobileInput);
    }

    if (addressValue === '') {
        addressInput.focus();
        setError(addressInput, 'This field cannot be empty');
    } else {
        setSuccess(addressInput);
    }

    if (passOneFnameValue === '') {
        passOneFnameInput.focus();
        setError(passOneFnameInput, 'This field cannot be empty');
    } else if (passOneFnameValue.length > 0 && passOneFnameValue.length <= 5) {
        passOneFnameInput.focus();
        setError(passOneFnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passOneFnameInput);
    }

    if (passOneLnameValue === '') {
        passOneLnameInput.focus();
        setError(passOneLnameInput, 'This field cannot be empty');
    } else if (passOneLnameValue.length > 0 && passOneLnameValue.length <= 5) {
        passOneLnameInput.focus();
        setError(passOneLnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passOneLnameInput);
    }

    if (passTwoFnameValue === '') {
        passTwoFnameInput.focus();
        setError(passTwoFnameInput, 'This field cannot be empty');
    } else if (passTwoFnameValue.length > 0 && passTwoFnameValue.length <= 5) {
        passTwoFnameInput.focus();
        setError(passTwoFnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passTwoFnameInput);
    }

    if (passTwoLnameValue === '') {
        passTwoLnameInput.focus();
        setError(passTwoLnameInput, 'This field cannot be empty');
    } else if (passTwoLnameValue.length > 0 && passTwoLnameValue.length <= 5) {
        passTwoLnameInput.focus();
        setError(passTwoLnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passTwoLnameInput);
    }

    if (passThreeFnameValue === '') {
        passThreeFnameInput.focus();
        setError(passThreeFnameInput, 'This field cannot be empty');
    } else if (passThreeFnameValue.length > 0 && passThreeFnameValue.length <= 5) {
        passThreeFnameInput.focus();
        setError(passThreeFnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passThreeFnameInput);
    }

    if (passThreeLnameValue === '') {
        passThreeLnameInput.focus();
        setError(passThreeLnameInput, 'This field cannot be empty');
    } else if (passThreeLnameValue.length > 0 && passThreeLnameValue.length <= 5) {
        passThreeLnameInput.focus();
        setError(passThreeLnameInput, 'This field requires more than 5 characters');
    } else {
        setSuccess(passThreeLnameInput);
    }

    if (passOneAgeValue === '') {
        passOneAgeInput.focus();
        setError(passOneAgeInput, 'This field cannot be empty');
    } else {
        setSuccess(passOneAgeInput);
    }

    if (passTwoAgeValue === '') {
        passTwoAgeInput.focus();
        setError(passTwoAgeInput, 'This field cannot be empty');
    } else {
        setSuccess(passTwoAgeInput);
    }

    if (passThreeAgeValue === '') {
        passThreeAgeInput.focus();
        setError(passThreeAgeInput, 'This field cannot be empty');
    } else {
        setSuccess(passThreeAgeInput);
    }
});

typeOneWay.onchange = () => {
    returnDiv.style.display = "none";
    // returning.removeAttribute("required");
};

typeReturn.onchange = () => {
    returnDiv.style.display = "inline-block";
    // returning.setAttribute("required", "");
};

console.log(returnDiv);
console.log(typeOneWay);
console.log(typeReturn);
console.log(returning);