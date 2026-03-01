document.getElementById('imagen').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let preview = document.getElementById('previewImg');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }else {
        preview.src = '#';
        preview.style.display = 'none';
    }
});

document.getElementById('productoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    let nombre = document.getElementById('nombre').value.trim();
    let precio = document.getElementById('precio').value.trim();
    let categoria = document.getElementById('categoria').value;
    let imagenInput = document.getElementById('imagen');
    let imagen = document.getElementById('previewImg').src;

    if(imagenInput.files.length === 0) {
        alert("Por favor, seleccione una imagen.");
        return;
    }

    if (nombre === '' || precio === '' || categoria === '') {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    let producto = JSON.parse(localStorage.getItem('productos')) || [];
    producto.push({ nombre, precio, categoria, imagen });
    localStorage.setItem('productos', JSON.stringify(producto));

    alert("Producto agregado exitosamente.");

    location.reload(); // Recarga la página para mostrar el nuevo producto
});