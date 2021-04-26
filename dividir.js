function dividir(num1, num2) {
    if (num1 && num2 !== 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir por cero";
    }
}

module.exports = dividir;

