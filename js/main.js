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

// Funciones para los acompañantes
function papasNormales() {
    alert("Ha seleccionado Papas Fritas Normales.");
}

function papasGrandes() {
    alert("Ha seleccionado Papas Fritas Grandes.");
}

function papasCheddar() {
    alert("Ha seleccionado Papas con Cheddar y Bacon.");
}

function arosCebolla() {
    alert("Ha seleccionado Aros de Cebolla.");
}

// Función para las gaseosas
function menuGaseosas() {
    alert("Ha seleccionado el menú de gaseosas.");
}

// Función para el menú de acompañantes
function menuAcompaniante() {
    let menuAcompaniante = parseInt(
        prompt(
            "Elija su opción: \n" +
            "1- Papas fritas normales \n" +
            "2- Papas fritas grandes \n" +
            "3- Papas fritas con cheddar y bacon \n" +
            "4- Aros de cebolla \n" +
            "5- Volver atrás \n" +
            "6- Salir."
        )
    );

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
        menuAcompaniante = parseInt(
            prompt(
                "Elija su opción: \n" +
                "1- Papas fritas normales \n" +
                "2- Papas fritas grandes \n" +
                "3- Papas fritas con cheddar y bacon \n" +
                "4- Aros de cebolla \n" +
                "5- Volver atrás \n" +
                "6- Salir."
            )
        );
    }
}

// Funciones específicas para hamburguesas
function oklahoma() {
    let oklahoma = prompt(
        "Hamburguesa Oklahoma $10500 \n" +
        "Doble Medallón de Carne Estilo Oklahoma (Cebolla a la Plancha) y Cheddar. \n" +
        "Acompañada de papas fritas y salsa extra a elección. \n" +
        "¿Cuántas desea?"
    );
    let resultado = oklahoma * 10500;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function original() {
    let original = prompt(
        "Hamburguesa Original $11000 \n" +
        "Doble Medallón de Carne, Cheddar, Lechuga, Tomate y Mayonesa CNB. \n" +
        "Acompañada de papas fritas y salsa extra a elección. \n" +
        "¿Cuántas desea?"
    );
    let resultado = original * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function cheesenBurger() {
    let cheesenBurger = prompt(
        "Hamburguesa Cheesen Burger $13000 \n" +
        "Triple Medallón de Carne, Cheddar, Mozzarella, y Barbacoa CNB. \n" +
        "Acompañada de papas fritas y salsa extra a elección. \n" +
        "¿Cuántas desea?"
    );
    let resultado = cheesenBurger * 13000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function butterBurger() {
    let butterBurger = prompt(
        "Hamburguesa Butter Burger $11000 \n" +
        "Doble Medallón de Carne, Manteca, Cebolla Estofada y Cheddar. \n" +
        "Acompañada de papas fritas y salsa extra a elección. \n" +
        "¿Cuántas desea?"
    );
    let resultado = butterBurger * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

function yanquiCrispy() {
    let yanquiCrispy = prompt(
        "Hamburguesa Yanqui Crispy $11000 \n" +
        "Doble Medallón de Carne, Applewood Bacon, Cheddar, Cebolla Crispy y Mayonesa CNB. \n" +
        "Acompañada de papas fritas y salsa extra a elección. \n" +
        "¿Cuántas desea?"
    );
    let resultado = yanquiCrispy * 11000;
    let confirmacion = prompt("Perfecto, ¿desea algo más? Si/No");
    if (confirmacion == "no") {
        alert("Muchas gracias, el total del pedido es $" + resultado);
    }
}

// Menú de hamburguesas
function menuHamburguesas() {
    let opcion = parseInt(
        prompt(
            "Elija una opción: \n" +
            "1- Oklahoma ($10500) \n" +
            "2- Original ($11000) \n" +
            "3- Cheesen Burger ($13000) \n" +
            "4- Butter Burger ($11000) \n" +
            "5- Yanqui Crispy ($11000) \n" +
            "6- Salir"
        )
    );

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
        opcion = parseInt(
            prompt(
                "Elija una opción: \n" +
                "1- Oklahoma ($10500) \n" +
                "2- Original ($11000) \n" +
                "3- Cheesen Burger ($13000) \n" +
                "4- Butter Burger ($11000) \n" +
                "5- Yanqui Crispy ($11000) \n" +
                "6- Salir"
            )
        );
    }
    alert("Gracias por su pedido.");
}

// Menú principal
function menuPrincipal() {
    let menu = parseInt(
        prompt(
            "Elija una opción: \n" +
            "1- Hamburguesas \n" +
            "2- Acompañantes \n" +
            "3- Gaseosas \n" +
            "4- Salir"
        )
    );

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
        menu = parseInt(
            prompt(
                "Elija una opción: \n" +
                "1- Hamburguesas \n" +
                "2- Acompañantes \n" +
                "3- Gaseosas \n" +
                "4- Salir"
            )
        );
    }
    alert("Gracias por utilizar nuestro servicio.");
}

// Ejecutar menú principal
menuPrincipal();
