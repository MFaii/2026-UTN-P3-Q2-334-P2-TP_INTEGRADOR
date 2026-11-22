const urlBase = "http://localhost:3001";
const contenedorProductos = document.getElementById("contenedor-prod");
const getProductForm = document.getElementById("getProductForm");

getProductForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const idProd = event.target.idProd.value.trim();
	console.log(idProd);

	try {
		const response = await fetch(`${urlBase}/api/products/${idProd}`);
		console.log(response);

		const data = await response.json();

		const producto = data.payload[0];

		renderizarProducto(producto);
	} catch (error) {
		console.error("Error al obtener productos: ", error);
	}
});

function renderizarProducto(producto) {
	let htmlProducto = `
            <div class="product-card">
                    <div class="card-img-wrapper">
                        <img class="card-img" src="${producto.image}" alt="${producto.name}">
                    </div>
                    <div class="card-content">
                        <h4>${producto.name}</h4>
                        <p>ID: ${producto.id}</p>
                        <p class="product-price">$ ${producto.price}</p>
                    </div>
                </div>
            `;

	contenedorProductos.innerHTML = htmlProducto;
}
