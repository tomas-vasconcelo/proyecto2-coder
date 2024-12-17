// Mostrar el primer prompt
let entrega = prompt("Bienvenidos! \n 1- Delivery \n 2- Take Away");
if (entrega == "1") {
    let direccion = prompt("Ingrese su dirección: ");
    alert("Gracias, enviaremos tu pedido a: " + direccion);
} else if (entrega == "2") {
    alert("La dirección del local para retirar el pedido es 46 n1036.");
} else {
    alert("Opción inválida, el programa continuará con el menú.");
}

// FUNCIONES PARA LOS ACOMPAÑANTES
function papasNormales() {
    let papasNormales = prompt("Porcion de papas fritas Normales $4000 \n ¿Cuántas desea?");
    let resultado = papasNormales * 4000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function papasGrandes() {
    let papasGrandes = prompt("Porcion de papas fritas grandes $5000 \n ¿Cuántas desea?");
    let resultado = papasGrandes * 5000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function papasCheddar() {
    let papasCheddar = prompt("Porcion de papas fritas con cheddar y bacon $6000 \n ¿Cuántas desea?");
    let resultado = papasCheddar * 6000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function arosCebolla() {
    let arosCebolla = prompt("Porcion de aros de cebolla $4500 \n ¿Cuántos desea?");
    let resultado = arosCebolla * 4500;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

// FUNCIONES PARA LAS GASEOSAS 

function cocaCola() {
    let cocaCola = prompt("Bebida Coca Cola 2L $3000 \n ¿Cuántas desea?");
    let resultado = cocaCola * 3000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function sprite() {
    let sprite = prompt("Bebida Sprite 2L $3000 \n ¿Cuántas desea?");
    let resultado = sprite * 3000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}


function fanta() {
    let fanta = prompt("Bebida Fanta naranja 2L $3000 \n ¿Cuántas desea?");
    let resultado = fanta * 3000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function cerveza() {
    let cerveza = prompt("Cerveza Heinken 1L $1800 \n ¿Cuántas desea?");
    let resultado = cerveza * 1800;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}



// Funciones específicas para hamburguesas
function oklahoma() {
    let oklahoma = prompt("Hamburguesa Oklahoma $10500 \n Doble Medallón de Carne Estilo Oklahoma (Cebolla a la Plancha) y Cheddar. \n Acompañada de papas fritas y salsa extra a elección. \n ¿Cuántas desea?");
    let resultado = oklahoma * 10500;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function original() {
    let original = prompt("Hamburguesa Original $11000 \n Doble Medallón de Carne, Cheddar, Lechuga, Tomate y Mayonesa CNB. \n Acompañada de papas fritas y salsa extra a elección. \n ¿Cuántas desea?");
    let resultado = original * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function cheesenBurger() {
    let cheesenBurger = prompt("Hamburguesa Cheesen Burger $13000 \n Triple Medallón de Carne, Cheddar, Mozzarella, y Barbacoa CNB. \n Acompañada de papas fritas y salsa extra a elección. \n ¿Cuántas desea?");
    let resultado = cheesenBurger * 13000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function butterBurger() {
    let butterBurger = prompt("Hamburguesa Butter Burger $11000 \n Doble Medallón de Carne, Manteca, Cebolla Estofada y Cheddar. \n Acompañada de papas fritas y salsa extra a elección. \n ¿Cuántas desea?");
    let resultado = butterBurger * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function yanquiCrispy() {
    let yanquiCrispy = prompt("Hamburguesa Yanqui Crispy $11000 \n Doble Medallón de Carne, Applewood Bacon, Cheddar, Cebolla Crispy y Mayonesa CNB. \n Acompañada de papas fritas y salsa extra a elección. \n ¿Cuántas desea?");
    let resultado = yanquiCrispy * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

// FUNCION PARA EL MENU DE GASEOSAS
function menuGaseosas() {
    let menuGaseosas= parseInt(prompt("Elija su opción: \n 1- Coca cola \n 2- Sprite \n 3- Fanta \n 4- Cerveza \n 5- Volver atras \n 6- Salir"))
    while (menuGaseosas !== 6) {
        switch (menuGaseosas) {
            case 1:
                cocaCola();
                break;
            case 2:
                sprite();
                break;
            case 3:
                fanta();
                break;
            case 4:
                cerveza();
                break;
            case 5:
                return; // Volver al menú principal
            default:
                alert("Opción incorrecta, intenta de nuevo.");
        }
        menuAcompaniante = parseInt(prompt("Elija su opción: \n 1- Coca cola \n 2- Sprite \n 3- Fanta \n 4- Cerveza \n 5- Volver atras \n 6- Salir"));
    }
}
// FUNCION PARA EL MENU ACOMPAÑANTE
function menuAcompaniante() {
    let menuAcompaniante = parseInt(prompt("Elija su opción: \n 1- Papas fritas normales \n 2- Papas fritas grandes \n 3- Papas fritas con cheddar y bacon \n 4- Aros de cebolla \n 5- Volver atrás \n 6- Salir."));
    while (menuAcompaniante !== 6) {
        switch (menuAcompaniante) {
            case 1:
                papasNormales();
                break;
                case 2:
                    papasGrandes();
                    break;
                    case 3:
                        papasCheddar();
                        break;
                        case 4:
                            arosCebolla();
                            break;
                            case 5:
                return; // Volver al menú principal
            default:
                alert("Opción incorrecta, intenta de nuevo.");
        }
        menuAcompaniante = parseInt(prompt("Elija su opción: \n 1- Papas fritas normales \n 2- Papas fritas grandes \n 3- Papas fritas con cheddar y bacon \n 4- Aros de cebolla \n 5- Volver atrás \n 6- Salir"));
    }
}



// Menú de hamburguesas
function menuHamburguesas() {
    let opcion = parseInt(
        prompt("Elija una opción: \n 1- Oklahoma ($10500) \n 2- Original ($11000) \n 3- Cheesen Burger ($13000) \n 4- Butter Burger ($11000) \n 5- Yanqui Crispy ($11000) \n 6- Salir"));
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
        opcion = parseInt(prompt("Elija una opción: \n 1- Oklahoma ($10500) \n 2- Original ($11000) \n 3- Cheesen Burger ($13000) \n 4- Butter Burger ($11000) \n 5- Yanqui Crispy ($11000) \n 6- Salir"));
    }
    alert("Gracias por su pedido.");
}



// Menú principal
function menuPrincipal() {
    let menu = parseInt(prompt("Elija una opción: \n 1- Hamburguesas \n 2- Acompañantes \n 3- Gaseosas \n 4- Salir"));
    while (menu !== 4) {
        switch (menu) {
            case 1:
                menuHamburguesas();
                break;
            case 2:
                menuAcompaniante();
                break;
            case 3:
                menuGaseosas();
                break;
            default:
                alert("Opción incorrecta, intenta de nuevo.");
        }
        menu = parseInt(prompt("Elija una opción: \n 1- Hamburguesas \n 2- Acompañantes \n 3- Gaseosas \n 4- Salir"));
    }
    alert("Gracias por utilizar nuestro servicio.");
}

// Ejecutar menú principal
menuPrincipal();
