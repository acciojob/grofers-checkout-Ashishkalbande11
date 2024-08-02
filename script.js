const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.getElementById("table");


const totalDisplay = document.createElement("div");
totalDisplay.id = "ans";
document.body.appendChild(totalDisplay);

const getSum = () => {
    // Select all elements with class 'price'
    const prices = document.querySelectorAll('.price');
    let total = 0;

    // Iterate over the NodeList and sum up the prices
    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });

    // Display the total price in the #ans element
    totalDisplay.textContent = 'Total Price: ' + total;
};

getSumBtn.addEventListener("click", getSum);
