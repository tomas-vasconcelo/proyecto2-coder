
// Mostrar el primer prompt
let entrega = prompt("Bienvenidos! \n 1- Delivery \n 2- Take Away");
if (entrega == "1") {
    let direccion = prompt("Ingrese su direccion: ");
    alert("Gracias, enviaremos tu pedido a: " + direccion);
} else if (entrega == "2") {
    alert("La direccion del local para retirar el pedido es 46 n1036.");
} else {
    alert("Opción inválida, el programa continuará con el menú.");
}


// Menú principal

function oklahoma(){
    let oklahoma = prompt ("Hamburguesa Oklahoma $10500 \n Doble Medallón de Carne Estilo Oklahoma (Cebolla a la Plancha) y Cheddar. Acompañada de papas fritas y salsa extra a elección. \n ¿Cuantas desea?")
    let resultado = oklahoma * 10500
    let confirmacion = prompt ("Perfecto, desea algo mas? Si/No")
    if(confirmacion == "no"){
        alert("Muchas gracias, el total del pedido es $"+resultado)
    }
}










let opcion = parseInt(prompt("Elija una opción: \n 1- Oklahoma \n 2- Original \n 3- Cheesen Burger \n 4- Butter Burger \n 5- Yanqui Crispy \n 6- Salir"));

while (opcion !== 6) {
    switch (opcion) {
        case 1:
            oklahoma();
            break;
        case 2:
            original();
            break;
        case 3:
            cheesenBurger();
            break;
        case 4:
            butterBurger();
            break;
        case 5:
            yanquiCrispy();
            break;
        default:
            alert("Opción incorrecta, intenta de nuevo.");
    }
    opcion = parseInt(prompt("Elija una opción: \n 1- Convertir pesos a dólares \n 2- Convertir pesos a euros \n 3- Convertir pesos a reales \n 4- Butter Burger \n 5- Yanqui Crispy \n 6- Salir"));
}

alert("Finalizando programa, gracias por utilizar nuestro servicio.");
