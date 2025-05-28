let agregarDato = (event) =>{
 event.preventDefault();

let tipo = document.getElementById("tipo").value;
let descripcion = document.getElementById("descripcion").value;
let valor = document.getElementById("valor").value;

if(descripcion!=""&& valor !==""){
    console.log("descripcion:  "+ descripcion);
    console.log("valor: "+valor);
}else{
    alert("debe completar todos los campos");
    console.log(tipo);
}
