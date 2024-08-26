// let anioNacimiento = prompt("Ingresá tu año de nacimiento")
// let edad = 2024 - parseInt(anioNacimiento)
// console.log(edad)


let edad;
while (true){
    edad = prompt ("Por favor, ingresá tu edad")
}
if (isNaN(edad)){
    alert(por favor, ingresá un número valido);
    continue;
}
edad = numero(edad);
if (edad >=18){
    window.location.href = "https://1ra-entrega-js.github.io"
}