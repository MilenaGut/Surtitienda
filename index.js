
//funciones 

function pedirDatos(){ let miNombre = prompt("Ingresa su Nombre")
let miApellido = prompt("Ingresa sus apellidos")
let miEmail = prompt("Ingresa su Email")
let miComentarios = prompt("Dejas tus Observaciones")
console.log(miNombre,miApellido,miEmail,miComentarios)    
}

pedirDatos()

function resultado (){ 
let ventaPera = 11000
let ventaManzana = 3450
console.log(ventaPera+ventaManzana)    
}

resultado()
//Arryas  - listado de alto nivel

const frutas = ["manzanas","peras","durazno"]
console.log(frutas)

let busqueda = frutas.find ((fruta) => fruta==="manzanas")
console.log(busqueda)

let preciosKg =[2500,6538,7436,8746]
console.log(preciosKg)
let sumaPrecios =preciosKg.filter((precio) => precio>6600)
console.log(sumaPrecios)



