// let anioNacimiento = prompt("Ingresá tu año de nacimiento")
// let edad = 2024 - parseInt(anioNacimiento)
// console.log(edad)

// }
// let nombre = prompt("¿Cómo es tu nombre?");
// let apellido = prompt("¿Cómo es tu apellido?");
// let nombrecompleto = nombre + " " + apellido;
// console.log(nombrecompleto)
// alert("Bienvenid@," + " " + nombrecompleto)
// let anioNacimiento = prompt("Ingresa tu año de nacimiento")
// let edad = 2024 - anioNacimiento;
// while(edad <=18){
//     alert("Lo sentimos, debes tener al menos 18 años para poder ingresar.")
//     break;
// }
    function ObtenerNombres(nombres){
        let nombre = prompt("¿Cómo es tu nombre?");
        console.log("Su nombre es: " + nombre );
        let apellido = prompt ("¿Cómo es tu apellido?");
        console.log("Su apellido es: " + apellido)
        let nombreCompleto = nombre + " " + apellido;
        console.log("Su nombre completo es: " + nombreCompleto);
        let bienvenidafinal = "bienvenid@" + " " + nombreCompleto;
        alert (bienvenidafinal);
    }
    ObtenerNombres()


    let anioDenacimiento = prompt("¿Cuál es tu año de nacimiento?");
    let anioActual = 2024;
    const edad = anioActual - anioDenacimiento;
    console.log("Su edad es: " + edad + " años")
    alert ("Tu edad es: " + edad + " años")
   
    if (edad < 18){
        alert("Lo sentimos! Debes tener al menos 18 años para poder comprar en nuestra pagina!")
    }
    else{
        alert("¡Gracias por visitarnos! Al ser mayor de edad podras comprar nuestras bebidas al mejor precio ")

        let preferencia;
        do {
            preferencia = prompt("¿Prefieres: Bebidas con alcohol o Bebidas sin alcohol? (introduce tal cual lo consultamos)").toLowerCase();
             if (preferencia === "bebidas con alcohol" || preferencia === "bebidas sin alcohol") {
                 alert("Has seleccionado: " + preferencia);
            } else {
                 alert("Por favor, introduce 'Bebidas con alcohol' o 'Bebidas sin alcohol'.");
            }
         } while (preferencia !== "bebidas con alcohol" && preferencia !== "bebidas sin alcohol");
        }
