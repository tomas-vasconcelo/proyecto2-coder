function dolar (){
    const numeroA = parseInt(prompt("Ingrese el valor en pesos"))
    const resultado = numeroA * 1095
    alert(numeroA + " pesos argentinos son " +resultado + " dolares estadounidenses")
}

function euro (){
    const numeroA = parseInt(prompt("Ingrese el valor en pesos"))
    const resultado = numeroA * 1030
    alert(numeroA + " pesos argentinos son " +resultado + " euros")
}

function dolar (){
    const numeroA = parseInt(prompt("Ingrese el valor en pesos"))
    const resultado = numeroA * 171
    alert(numeroA + " pesos argentinos son " +resultado + " reales brasileños")
}


let opcion = parseInt(prompt("Elija una opcion: \n 1- convertir pesos en dolares \n 2-convertir pesos en euro \n 3-convertir pesos en reales \n 4-salir"))
while (opcion !== 5){
    switch(opcion){
        case 1:
            dolares()
            break
        case 2:
            euros()
            break
        case 3:
            reales()
            break
        default:
            alert("Opcion incorrecta")
    }
    opcion = parseInt(prompt("Elija una opcion: \n 1- convertir pesos en dolares \n 2-convertir pesos en euro \n 3-convertir pesos en reales \n 4-salir"))
}
alert("Finalizando programa, enter para cerrar.")
