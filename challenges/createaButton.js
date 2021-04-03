let number = 0;

//Creating a button element
let button = document.createElement("button");

	button.id = 'btn';
	button.innerHTML = '0';
	button.style.cssText = ` 
		width: 96px;
		height: 48px;
		font-size: 24px;
		color: black;
		border-radius: 5%;
		border: solid black 2px;
	`;

	document.body.appendChild(button);

	button.addEventListener("click", () => {
		number++;
		button.innerHTML = number;
	});