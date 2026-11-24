const urlBase = "http://localhost:3001";
const contenedorProductos = document.getElementById("contenedor-productos");
const getProductForm = document.getElementById("getProductForm");
const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);
	console.log(formData);

	const formObj = Object.fromEntries(formData.entries());
	console.log(formObj);

	console.log(JSON.stringify(formObj));

	formObj.price = Number(formObj.price);

	try {
		const response = await fetch(`${urlBase}/api/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formObj),
		});

		const data = await response.json();

		console.log(data.message);
		alert(data.message);
	} catch (error) {
		console.error("Error al obtener productos: ", error);
	}
});
