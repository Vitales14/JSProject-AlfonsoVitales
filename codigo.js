// OBTENIENDO BOTONES PARA DARK/LIGHT MODE
let switchNav = document.getElementById("switch"); //nav del html
let dropdown1 =document.getElementById("dd1"); //botón de dropdown (header)
let dropdown2 = document.getElementById("dd2"); // Segundo botón de dropdown (header)
let boton = document.getElementById("botoncito"); //botón para cambiar de modo
let mode = localStorage.getItem("Mode");
stockProductos = [
    { id: 1, tipo: "ropa", marca:"Lacoste", img: "./images/productos/playera1.jpg", precio: 799, descripcion: "Camiseta casual marca Lacoste de algodón", color: "negro"},
    { id: 2, tipo: "ropa", marca: "Adidas", img: "./images/productos/playera2.jpg", precio: 1099, descripcion: "Una cómoda sudadera confeccionada en suave felpa francesa", color: "negro"},
    { id: 3, tipo: "ropa", marca: "Tommy Hilfiger", img: "./images/productos/playera3.jpg", precio: 1099, descripcion: "Sudadera de cuello redondo con logo de niña", color: "azul"},
    { id: 4, tipo: "ropa", marca: "Polo Ralph Lauren", img: "./images/productos/playera4.jpg", precio: 499, descripcion: "Mejor calidad para tu increíble look.", color: "negro"},
    { id: 5, tipo: "calzado", marca: "Nike", img: "./images/productos/calzado1.png", precio: 2099, descripcion: "Look fresco, sensación familiar.", color: "amarillo"},
    { id: 6, tipo: "calzado", marca: "Nike", img: "./images/productos/calzado2.png", precio: 1499, descripcion: "Diseñado para recorrer las calles con la comodidad y actitud en mente.", color: "café"},
    { id: 7, tipo: "calzado", marca: "Nike", img: "./images/productos/calzado3.png", precio: 2299, descripcion: "Un estilo icónico ahora más cómodo.", color: "morado"},
    { id: 8, tipo: "calzado", marca: "Reebok", img: "./images/productos/calzado4.jpg", precio: 1599, descripcion: "Todo menos simplicidad.", color: "blanco"},
    { id: 9, tipo: "accesorios", marca: "Nike", img: "/images/productos/accesorios1.jpg", precio: 649, descripcion: "Ligera pero audaz.", color: "verde"},
    { id: 10, tipo: "accesorios", marca: "Nike", img: "/images/productos/accesorios2.jpg", precio: 649, descripcion: "La bolsa para objetos pequeños Nike Heritage 2.0 cuenta con un diseño duradero con múltiples compartimentos.", color: "gris"},
    { id: 11, tipo: "accesorios", marca: "Adidas", img: "/images/productos/accesorios3.jpg", precio: 1099, descripcion: "Una mochila resistente hecha con materiales reciclados", color: "negro"},
    { id: 12, tipo: "accesorios", marca: "Adidas", img: "/images/productos/accesorios4.jpg", precio: 249, descripcion: "Este trío de calcetines cortos incorporan un panel acolchado.", color: "negro"}
]

//MODO PREDETERMINADO (seleccionado previamente)
//Establece un valor para el tema en caso de ya tener algo cargado en el local storage,
//en caso de no haber nada: se establece el modo LIGHT de manera predeterminado
if(mode != null){
    if(mode == "dark"){
        document.body.className = "darkMode"
        switchNav.className = "navbar navbar-dark navbar-expand-lg"
        dropdown1.className = "dropdown-menu dropdown-menu-dark"
        dropdown2.className = "dropdown-menu dropdown-menu-dark"
        boton.innerText = "Light Mode";
    }
}
else{
    mode = "light";
}

//FUNCIONES OCUPADAS A LO LARGO DEL PROYECTO
//función para cambiar al modo oscuro
function darkMode(){
    document.body.className = "darkMode";
    switchNav.classList.remove("bg-light");
    switchNav.classList.add("navbar-dark");
    dropdown1.classList.add("dropdown-menu-dark");
    dropdown2.classList.add("dropdown-menu-dark");
    boton.innerText = "Light Mode";
    mode = "dark"
} 
//función para cambiar al modo claro
function lightMode(){
    document.body.className = "lightMode";
    switchNav.classList.remove("navbar-dark");
    dropdown1.classList.remove("dropdown-menu-dark");
    dropdown2.classList.remove("dropdown-menu-dark");
    boton.innerText = "Dark Mode";
    mode = "light";   
}
//función para mostrar un alert cuando se agrega un producto al carrito
function mensajeAgregar(){
    Toastify({
        text: "Agregado correctamente",
        duration: 1600
        }).showToast();
}
//función para mostrar un alert cuando se vacía el carrito
function mensajeVaciar(){
    Toastify({
    text: "Carrito vaciado con éxito",
    duration: 1600
    }).showToast();
}

function llamadoArchivo(){
    fetch('stock.json')
    .then(res => res.json())
    .then(stock => {
        stock.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add("producto")
            div.innerHTML = `
            <img src=${producto.img} alt"" class="imagen">
            <h3>${producto.marca}</h3>
            <p>${producto.descripcion}</p>
            <p class="precioProducto">Precio: $${producto.precio}</p>
            <button id="agregar${producto.id}" class= "boton-agregar"> Agregar <i class="fas fa-shopping-cart"></i></button>
            `
            contenedorProductosHombre.appendChild(div)
        
            const boton = document.getElementById(`agregar${producto.id}`)
        
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id)
                mensajeAgregar();
            })
        })
    })
}

//EVENTO-LOCALSTORAGE DE DARK MODE
//Evento que trabaja directamente con las funciones de light y dark mode
//este se encarga cambiar el tema de la página cada que se dé un click sobre ellas.
//Además, este guarda los cambios en el local Storage, todo esto usando el operador ternario.
boton.onclick = () => {
    mode == "light" ? darkMode() : lightMode() ;
    localStorage.setItem("Mode",mode);
}

//DONDE LA MAGIA INICIA
//En esta sección se muestran los primeros pasos de mi código JS,
//ya que aquí es donde se obtienen los objetos del DOM para su uso posterior.
const contenedorProductosHombre = document.getElementById('contenedor-productosHombre')
const carritoContenedor = document.getElementById('carrito-contenedor')

const botonComprar = document.getElementById("comprar-carrito")
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById("cantidad")
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = [] //Declaro un arreglo vacío para posteriormente llenarlo con el DOM. 

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//Evento que se encarga de vaciar el carrito de compras al realizar un click
botonVaciar.addEventListener('click', () => {
    mensajeVaciar();
    carrito.length = 0
    actualizarCarrito()
    localStorage.removeItem('carrito')
})

//Dejaré este código por aquí, ya que me ha costado mucho usar el JSON, y esto me motiva un poco jajaja
//se hace en forma de Cards estilo Bootstrap.
/*stockProductosHombre.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add("producto")
    div.innerHTML = `
    <img src=${producto.img} alt"" class="imagen">
    <h3>${producto.marca}</h3>
    <p>${producto.descripcion}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class= "boton-agregar"> Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductosHombre.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
        mensajeAgregar();
    })
})*/ 
llamadoArchivo();


//En esta parte de aquí agregamos productos al carrito
//La primera parte verifica si existe el producto
//Si existe, se le añade uno más a la cantidad, sino se añade el producto como nuevo al carrito.
//Finalmente, se ejec
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }
    else{
    const item = stockProductos.find((prod) => prod.id === prodId)  // ME GUSTARÍA CAMBIAR ESTA LINEA DE CÓDIGO
    carrito.push({...item, cantidad: 1})
    console.log(carrito);
    }
    actualizarCarrito()
}

//Este es lo contrario a la parte anterior del código, ya que es su inverso. En este caso, elimina los productos del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    console.log(carrito);
}

//Este método añade todas las propiedades (de manera visual)
//al carrito de compras, de manera que es el encargado de mostrar el producto ya añadido al carrito.
const actualizarCarrito = () => {
    carritoContenedor.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.marca}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        carritoContenedor.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

//Se hace uso de librerías para arrojar un alert mediante un evento.
//Consiste en mostrar un error al tratar de realizar la compra ya que esto solo es un simulador.
    botonComprar.addEventListener('click', () => {
            Swal.fire({
                icon: 'error',
                title: 'ERROR 404',
                text: 'Lo siento, aún trabajamos en ello',
                footer: '<a href="">¿Por qué sucede esto? </a>',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
    })




//CÓDIGO DEL MODAL PARA EL CARRITO
//Este código fue buscado de videos directamente para poder hacer que mi carrito de compras
//se mostrara sobre mi página con un efecto estilo "blur". 
//Sin embargo, se estiliza completamente de manera personalizada.
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})