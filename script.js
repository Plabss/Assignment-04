function increment(numberOf) {
    var number = document.getElementById(numberOf).value;
    number = parseInt(number);
    number = number + 1;
    document.getElementById(numberOf).value = number;

    costCalculation();
}


function decrement(numberOf) {
    var number = document.getElementById(numberOf).value;
    number = parseInt(number);
    if (number > 0) {
        number = number - 1;
    }
    document.getElementById(numberOf).value = number;

    costCalculation();
}

// subtotal,vat,total calculation

function costCalculation() {
    const subtotalCost = subtotalVatTotal();
    document.getElementById("subtotal").innerText = subtotalCost[0];

    const vat = subtotalVatTotal();
    document.getElementById("vat").innerText = vat[1];

    const total = subtotalVatTotal();
    document.getElementById("total").innerText = total[2];
}

function subtotalVatTotal() {
    const numberOfFirstClass = parseInt(document.getElementById("numberOfFirstClass").value);
    const numberOfEconomy = parseInt(document.getElementById("numberOfEconomy").value);
    var subtotalValue = ((numberOfFirstClass * 150) + (numberOfEconomy * 100));
    var vatValue = subtotalValue * 0.1;
    var totalValue = subtotalValue + vatValue;
    return [subtotalValue, vatValue, totalValue];
}

// first class + sign

const increaseFirstClass = document.getElementById("increaseFirstClass");
increaseFirstClass.addEventListener("click", function () {
    increment("numberOfFirstClass");
})

// Economy + sign

const increaseEconomy = document.getElementById("increaseEconomy");
increaseEconomy.addEventListener("click", function () {
    increment("numberOfEconomy");
});

// first class - sign

const decreaseFirstClass = document.getElementById("decreaseFirstClass");
decreaseFirstClass.addEventListener("click", function () {
    decrement("numberOfFirstClass");
})

// Economy - sign

const decreaseEconomy = document.getElementById("decreaseEconomy");
decreaseEconomy.addEventListener("click", function () {
    decrement("numberOfEconomy");
})

// For "Book Now" Button.

bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function () {
    const firstPage = document.getElementById("firstPage");
    firstPage.style.display = "none";
    const secondPage = document.getElementById("secondPage");
    secondPage.style.display = "block"
    const body = document.getElementById("body");
    body.style.background = "none";

    var numberOfFirstClassTicket = document.getElementById("numberOfFirstClass").value;
    document.getElementById("firstclassTicket").innerText = numberOfFirstClassTicket + " "

    var numberOfEconomyTicket = document.getElementById("numberOfEconomy").value;
    document.getElementById("economyTicket").innerText = numberOfEconomyTicket + " "
})
