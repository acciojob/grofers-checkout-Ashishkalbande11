const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.getElementById("table");


const getSum = () => {
//Add your code here
    // Get all elements with class "price"
        let arr = Array.from(document.querySelectorAll(".price"));
        // Initialize sum to 0
        let sum = 0;
        // Loop through each price element and add the value to the sum
        arr.forEach((item) => {
            sum += parseInt(item.innerText);
        });
        
        // Check if there's already a row with the id "ans" and remove it if it exists
        let existingRow = document.getElementById("ans");
        if (existingRow) {
            existingRow.remove();
        }
        
        // Create a new row for the total price
        let row = document.createElement("tr");
        row.setAttribute('id', "ans");
        
        // Create the first cell with the text "Total is: "
        let cell1 = document.createElement("td");
        cell1.innerText = "Total is: ";
        
        // Create the second cell with the sum
        let cell2 = document.createElement("td");
        cell2.innerText = sum;
        
        // Append the cells to the row
        row.appendChild(cell1);
        row.appendChild(cell2);
        
        // Append the row to the table
        table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
