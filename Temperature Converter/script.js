const celcius = document.querySelector("#celcius"),
fahrenheit = document.querySelector("#fahrenheit");

// set focus to celcius input field when page reload
window.addEventListener("load", () => celcius.focus());

// convert Celcius to Fahrenheit
celcius.addEventListener("input", () => {
    fahrenheit.value = ((celcius.value * 9) / 5 + 32).toFixed(2);

    // Clear Farenheit value when Celcius input is empty
    if(!celcius.value) fahrenheit.value = "";
});

// convert Farenheit to Celcius
fahrenheit.addEventListener("input", () => {
    celcius.value = (((fahrenheit.value - 32) * 5) / 9 ).toFixed(2);

    // Clear Celcius value when Farenheit input is empty
    if(!fahrenheit.value) celcius.value = "";
})
