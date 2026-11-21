const urlBase = "http://localhost:3001";
const contenedorProductos = document.getElementById("contenedor-prod");
const contenedorForm = document.getElementById("contenedor-form");
const getProductForm = document.getElementById("getProductForm");

getProductForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	// Limpiar la consulta anterior
	contenedorProductos.innerHTML = "";
	contenedorForm.innerHTML = "";

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
								<button id="btn-modificar">Modificar producto</button>
							</div>
						</div>
            `;

	contenedorProductos.innerHTML = htmlProducto;

	const btnModificar = document.getElementById("btn-modificar");
	btnModificar.addEventListener("click", () => {
		const confirmacion = confirm("¿Queres modificar este producto?");

		if (!confirmacion) {
			alert("Modificacion Cancelada");
		} else {
			renderizarFormularioPut(producto);
		}
	});
}

function renderizarFormularioPut(producto) {
	console.table(producto);

	let htmlForm = `
					<div class="modify-item">
            <h3>Modificar Producto</h3>

            <form id="modifyProductForm">

                <input type="hidden" name="id" id="idProd" value="${producto.id}">

                <label for="categoryProd">Categoria</label>
                <select name="category" id="categoryProd" required>
                    <option value="tv">Tv's</option>
                    <option value="celulares">Celulares</option>
                    <option value="monitores">Monitores</option>
                    <option value="notebooks">Notebooks</option>
                    </select>

                    <label for="imageProd">Imagen</label>
                    <input type="text" name="image" id="imageProd" value="${producto.image}" required>

                <label for="nameProd">Nombre</label>
                <input type="text" name="name" id="nameProd" value="${producto.name}" required>

                <label for="priceProd">Precio</label>
                <input type="number" name="price" id="priceProd" min="1" value="${producto.price}" required>
								
								<label for="activeProd">Estado</label>
                <select name="active" id="activeProd" required>
									<option value="1">Activo</option>
									<option value="0">Inactivo</option>
                </select>
										
                <input type="submit" value="Modificar Producto">
            </form>
					</div> 
            `;

	contenedorForm.innerHTML = htmlForm;

	const modifyProductForm = document.getElementById("modifyProductForm");

	modifyProductForm.addEventListener("submit", async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		const formObj = Object.fromEntries(formData.entries());

		formObj.price = Number(formObj.price);
		formObj.active = Number(formObj.active);

		try {
			const response = await fetch(`${urlBase}/api/products`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formObj),
			});

			const data = await response.json();

			console.log(data.message);
			alert(data.message);

			contenedorForm.innerHTML = "";
			contenedorProductos.innerHTML = "";
		} catch (error) {
			console.error("Ocurrio un error al modificar un producto: ", error);
		}
	});
}
