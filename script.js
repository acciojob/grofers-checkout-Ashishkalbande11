const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.getElementById("table")
const getSum = () => {
//Add your code here
	let arr = Array.form(Element.querySelectorAll(".price"));

	let sum = 0;
	arr.forEach((item) => {
		sum += parseInt(item.innerText);
	})

	let row = document.createElement("tr");
	row.setAttribute("id","ans");
	let col1 = document.createElement("td");
	col1.innerText = "Total amount: ";
	let col2 = document.createElement("td");
	col2.innerText = sum;

	row.appendChild(col1);
	row.appendChild(col2);
	table.appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);

