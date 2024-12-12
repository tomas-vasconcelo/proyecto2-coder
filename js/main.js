// let  nombre = "Tomas"
// console.log()


// ------------------------------------------------------------------------------------------------------------------------------------------//


//   IF

// if (furta == "sandia"){
//     console.log("Felicitaciones, estamos en el verano.")
// } else if (fruta == "mandarina"){
//     console.log("Me parece que es otoño.")
// } else {
//     console.log("Puede ser cualquier otra fruta.")
// }


// ------------------------------------------------------------------------------------------------------------------------------------------//



//    OR ||

// if (fruta == "sandia" || fruta == "melon"){
//     console.log("Efectivamente es verano.")
// }


// ------------------------------------------------------------------------------------------------------------------------------------------//



//     AND && 

// if (fruta == "sandia" && (mes == "enero" || mes == "febrero" || mes == "marzo" || mes == "diciembre")){
//     console.log("Fruta y mes veraniegos.")
// }


// ------------------------------------------------------------------------------------------------------------------------------------------//


//     FOR

// for ("desde"; "hasta"; "actualizacion"){
//     bloque de codigo
// }

// for (let i=1; i<=10; i++){
//     console.log(i)
// }

// let numero = parseInt (prompt("Ingrese la tabla de multiplicar que desea"))
//  for (let i=1; i<=15; i++)   {
//      let resultado = i*numero
//       console.log(numero+"x"+i+": "+resultado)
//  }


// for (let i=10; i>=1; i--){

//     console.log(i)
//     if (i=== 2) {
//         console.log("abortamos despegue")
//         break
//     }  
//     if(i===1){
//         console.log ("despegue")
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------------------//




//     WHILE 


// let continuar = true

// while(continuar) {
//     let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desea"));
//     for (let i = 1; i <= 15; i++) {
//         let resultado = i * numero;
//         console.log(numero + "x" + i + ": " + resultado);
//     }

//     let confirmacion = prompt ("Desea hacer otro calculo? Si/No")
//     if(confirmacion=="no")
//         continuar = false
//         console.log("Gracias!!")
// }



// let continuar = true
// while (continuar){
//     let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, ingrese 2 para extracciones, ingrese 3 para depositom ingrese otro numero para salir"))
    
//     switch(menu){
//         case 1:
//             console.log("Total de la cuenta: $3000.")
//             break
//         case 2: 
//             console.log("Limite de extraccion: $10000.")
//             break
//         case 3: 
//             console.log("Limite de deposito: $500.")
//             break
//         default:
//             console.log("Retire su tarjeta.")
//     }

//     let confirmacion = prompt ("Desea hacer otra consulta? Si/No")
//     if(confirmacion=="no"){
//         continuar = false
//         console.log("Gracias!!")
// }

// }


// ------------------------------------------------------------------------------------------------------------------------------------------//

// FUNCIONES

// function saludar (){
//     console.log("Hola")
// }

// saludar()


// FUNCION DECLARADA 


// function sumar (){
//  let numeroA = 15
//  let numeroB = 30
//   let resultado = numeroA + numeroB
//     return resultado
// }
// let resdultadoSuma = sumar()
// console.log("El resultado de la suma es: "+resdultadoSuma)


// FUNCION EXPRESADA

// const restar = function (){
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA - numeroB

//     return resultado
// }
// console.log(restar())

// MEJOR UTILIZACION

// let primerNumero = parseInt(prompt("Ingrese el primer numero"))
// let segundoNumero= parseInt(prompt("Ingrese el segundo numero"))

// function sumar (numeroA, numeroB){
//     let resultado = numeroA + numeroB
//     console.log("El resultado de la suma es: "+resultado)
// }
// sumar(primerNumero, segundoNumero)





// FUNCIONES FLECHA

// let primerNumero = parseInt(prompt("Ingrese el numero a multiplicar por 10"))

// const calculadoraDel10= primerNumero => primerNumero*10

// console.log(calculadoraDel10(primerNumero))


// let primerNumero = parseInt(prompt("Ingrese el primer numero"))
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"))

// const multiplicar = (numeroA, numeroB) => numeroA*numeroB
// console.log(multiplicar(primerNumero,segundoNumero))




// PRUEBA CALCULADORA


function sumar (){
    const numeroA = parseInt(prompt("Ingrese el primer numero"))
    const numeroB = parseInt(prompt("Ingrese el segundo numero"))
    const resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " +resultado)
}


