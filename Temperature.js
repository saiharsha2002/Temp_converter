function convert() {
    let temperature = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        let fahrenheit = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else if (unit === "fahrenheit") {
        let celsius = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
    }
}