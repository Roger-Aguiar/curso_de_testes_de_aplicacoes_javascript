function execute(number1, number2, operator) {
    const integer1 = parseInt(number1, 10);
    const integer2 = parseInt(number2, 10);

    if (Number.isNaN(integer1) || Number.isNaN(integer2)) {
        throw new Error("Please, enter a number!");
    }

    switch (operator) {
        case '+':
            return integer1 + integer2;
        case '-':
            return integer1 - integer2;
        case '*':
            return integer1 * integer2;
        case '/':
            return integer1 / integer2;
    }
}

module.exports = execute;