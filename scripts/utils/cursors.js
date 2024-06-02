const inputs = document.querySelectorAll(".range");
const pValues = document.querySelectorAll(".input-value");

function getSphereValues() {
    const values = [];

    for (let i = 0; i < inputs.length; i++) {
        const inputValue = inputs[i].value;
        pValues[i].textContent = inputValue;

        values.push(inputValue);
    }

    return values
}

getSphereValues();
