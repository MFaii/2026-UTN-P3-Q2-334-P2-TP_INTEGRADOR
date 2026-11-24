const urlBase = "http://localhost:3001";
const contenedorProductos = document.getElementById("contenedor-productos");
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
                        <button id="btn-eliminar">Eliminar producto</button>
                    </div>
                </div>
            `;

	contenedorProductos.innerHTML = htmlProducto;

	const btnEliminar = document.getElementById("btn-eliminar");
	btnEliminar.addEventListener("click", () => {
		const confirmacion = confirm("¿Queres eliminar este producto?");

		if (!confirmacion) {
			alert("Eliminacion cancelada");
		} else {
			eliminarProducto(producto.id);
		}
	});
}

async function eliminarProducto(id) {
	try {
		const response = await fetch(`${urlBase}/api/products/${id}`, {
			method: "DELETE",
		});

		console.log(response);

		const data = await response.json();

		console.log(data.message);
		alert(data.message);

		contenedorProductos.innerHTML = "";
	} catch (error) {
		console.error("Erro al eliminar un producto: ", error);
	}
}
