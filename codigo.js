/*-----------------------------------------------------------------------*/
/*----------------------------CREANDO OBJETOS----------------------------*/ 
/*-----------------------------------------------------------------------*/
//MÉTODOS CONSTRUCTORES
//MÉTODO CONSTRUCTOR DE CAMISETAS
class Camiseta{
    constructor(color, marca, precio){
        this.color = color
        this.marca = marca
        this.precio = precio
    }
}

const Camiseta1 = new Camiseta("blanco", "adidas", 349)
const Camiseta2 = new Camiseta("negro", "polo", 599)
const Camiseta3 = new Camiseta("azul","gap", 499) 

//MÉTODO CONSTRUCTOR DE TENIS
class Tenis{
    constructor(color, marca, precio){
        this.color = color
        this.marca = marca
        this.precio = precio
    }
}

const Tenis1 = new Tenis("morado", "nike", 3399)
const Tenis2 = new Tenis("blanco", "adidas", 1299)
const Tenis3 = new Tenis("negro", "vans", 999)

//ARRAY DE PRODUCTOS
const tenis = [Tenis1, Tenis2, Tenis3]
const camisetas = [Camiseta1, Camiseta2, Camiseta3]
const productos = tenis.concat(camisetas);

/*-----------------------------------------------------------------------*/
/*------------------------FUNCIONES DEL PROGRAMA-------------------------*/ 
/*-----------------------------------------------------------------------*/
//PRIMERA FUNCIÓN
function bienvenida(){
    alert("Bienvenido al asistente virtual de nuestra tienda. Para continuar, da clic en aceptar.") // 1er alert
    alert("IMPORTANTE: Todas tus respuestas para la toma de datos deben estar en minúsculas.") //2do alert
}

//SEGUNDA FUNCIÓN
function mensajeError(){
    alert("El dato ingresado no se encuentra. Por favor, recargue la página para continuar") 
}

//TERCERA FUNCIÓN
function programaBase(){
    let numero = parseInt (prompt("Escriba el número: 1. Mostrar catálogo completo. 2. Búsqueda por color. 3. Búsqueda por precio."))
    if (numero == 1){
        console.log("CATÁLOGO OFICIAL");
        productos.forEach((item)=> {
            console.log(item);
        })
    }

    else if (numero == 2){
        let color = prompt("Escriba el color que desee encontrar.")
        switch(color){
            case "blanco":
                const colorBlanco = productos.filter((colorDeseado) => colorDeseado.color.includes('blanco'))
                console.log("Los artículos de color " + color, "son: ");
                console.log(colorBlanco);
                break;
            case "negro":
                const colorNegro = productos.filter((colorDeseado) => colorDeseado.color.includes('negro'))
                console.log("Los artículos de color " + color, "son: ");
                console.log(colorNegro);
                break;
            case "azul":
                const colorAzul = productos.filter((colorDeseado) => colorDeseado.color.includes('azul'))
                console.log("Los artículos de color " + color, "son: ");
                console.log(colorAzul);
                break;
            case "morado":
                const colorMorado = productos.filter((colorDeseado) => colorDeseado.color.includes('morado'))
                console.log("Los artículos de color " + color, "son: ");
                console.log(colorMorado);
                break;
            default:
                mensajeError()
                break;
        }
    }

    else if (numero == 3){
        let precioBuscado = parseInt(prompt("¿Cuánto está dispuesto a gastar?"))
        if (precioBuscado >= 349){
            const precioDeseado = productos.filter((precioNuevo) => precioNuevo.precio <= precioBuscado)
            console.log("Estos son los productos por debajo del precio que busca: ");
            console.log(precioDeseado);
        }
        else{
            console.log("No se encuentran productos por debajo del precio solicitado.");
        }
    }

    else {
        mensajeError()    
    }
}

//CUARTA FUNCIÓN
function despedida(){
    console.log("\nEsperamos que haya encontrado lo que buscaba, agradecemos su tiempo. Recargue la página si desea continuar.");
}

/*-----------------------------------------------------------------------*/
/*-------------------------------EJECUTANDO------------------------------*/ 
/*-----------------------------------------------------------------------*/
//LLAMANDO A MIS FUNCIONES
bienvenida();
programaBase();
despedida();




