// Checked Property

document.getElementById("myButton").onclick = function () {
    // const myCheckBox = document.getElementById("myCheckBox");
    // if (document.getElementById("myCheckBox").checked) {

    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    // check if checkbox is checked
    if (myCheckBox.checked) {
        console.log("You are subscribed!");
    }
    else {
        console.log("You are NOT subscribed!");
    }

    // check if radio buttons are checked
    if (visaBtn.checked) {
        console.log("You are paying with a Visa!");
    }
    else if (mastercardBtn.checked) {
        console.log("You are paying with a Mastercard!");
    }
    else if (paypalBtn.checked) {
        console.log("You are paying with a Paypal!");
    } else {
        console.log("You must select a payment type!");
    }
};