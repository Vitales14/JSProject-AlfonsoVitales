let producto = prompt("Seleccione el tipo de producto: vaso o pulsera; para recibir el precio. ESC para salir.")
let vaso = 89
while(producto != "ESC"){
    if (producto == "vaso" || producto == "Vaso" || producto == "VASO"){
        console.log("El costo del vaso es de: " + vaso)
        function precio (){
            let vaso = 89
            let cantidad = parseInt(prompt("Ingresa la cantidad de vasos a requerir"))
            let precio = vaso * cantidad
            console.log("El precio es de: " + precio);
        }
        precio ();
        break
    }
    else if (producto == "pulsera" || producto == "Pulsera" || producto == "PULSERA"){
        console.log("El costo de la pulsera es de: " + pulsera)
        function precio (){
            let pulsera = 89
            let cantidad = parseInt(prompt("Ingresa la cantidad de vasos a requerir"))
            let precio = pulsera * cantidad
            console.log("El precio es de: " + precio);
        }
        precio ();
        break
    }
    
    else {
        console.log("El producto no se encuentra en stock");
        break
    }
}




