const bikesCart = ["Gt-650", "Hunter-350", "Bullet-350", "Splendor"];

createOrderOfBikes(bikesCart)
    .then(function (orderID) {
        console.log(orderID);
        return orderID;
    })
    .then(function () {
        return proceetToPayments(orderID);
    })
    .then(function () {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err);
    })

function createOrderOfBikes() {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart()) {
            const errorMessage = "cart is not validated"
            reject(errorMessage);
        }

        const orderID = "Pradip@1997"
        if (orderID) {
            setTimeout(function () {
                resolve(orderID);
            }, 5000);
        }

    });

    return pr;
}

function validateCart() {
    return false;
}

function proceetToPayments(orderID) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful.");
    });
}
