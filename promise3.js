const cart = ["Pen", "Bottle", "Chocolate", "Cup"];


createOrder(cart)
    .then(function () {
        console.log(orderID);
    })
    .then(function () {
        return proceetToPayments(orderID);
    })
    .then(function () {
        return showOrderSummary();
    })
    .catch(function (err) {
        console.log(err);
    })

function createOrder() {
    return new Promise(function (resolve, reject) {
        if (!cartIsValidated) {
            const errorMessage = "Cart is not validated";
            reject(errorMessage);
        }
        const orderID = "123456";
        resolve(orderID);
    });
}

function cartIsValidated() {
    return true;
}

function proceedToPayment() {
    return new Promise(function (resolve, reject) {
        resolve("Payment is successful.");
    })
}

function showOrderSummary() {
    return new Promise(function () {
        const summary = [
            "220000", cart
        ]
        resolve(summary);
    });
}