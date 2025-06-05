let ingresosHTML="";
let totalIngresos=0;

let EgresosHTML="";
let totalEgresos=0;



let agregarDato = (event) =>{
    event.preventDefault();

    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;

    if(descripcion!="" && valor !==""){
        console.log("descripcion: "+ descripcion);
        console.log("valor :"+valor);
        if(tipo==="ingreso"){
            cargarIngresos(descripcion, Number(valor));
          
        }else if(tipo ==="egreso"){
            cargarEgresos(descripcion, Number(valor)); //trabajar aca
        }
        document.getElementById("descripcion").value="";
        document.getElementById("valor").value="";
    }else{
        alert("Debe completar todos los campos");
    }
    console.log(tipo);
}

let cargarIngresos = (descripcion, valor) =>{
    ingresosHTML += crearIngresosHTML(descripcion,valor);
    totalIngresos+=valor; //totalIngresos = TotalIngresos + valor;
    let porcentajes = (totalEgresos/totalIngresos)*100;
    let presupuestoTotal = (totalIngresos-totalEgresos);
    document.getElementById("IngresoTotal").textContent = formatearCLP(totalIngresos);
    document.getElementById("presupuesto").textContent = formatearCLP(presupuestoTotal);//modificar
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
    document.getElementById("porcentaje").textContent = porcentajes+"%";
}


let crearIngresosHTML=(descripcion,valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatearCLP(valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
}

function formatearCLP(numero) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(numero);
}

let cargarEgresos = (descripcion, valor) =>{
    EgresosHTML += crearEgresosHTML(descripcion,valor);
    totalEgresos+=valor; //totaIngresos = TotalIngresos + valor;
    let porcentajes = (totalEgresos/totalIngresos)*100;
    let presupuestoTotal = (totalIngresos-totalEgresos);
    document.getElementById("EgresoTotal").textContent = formatearCLP(totalEgresos);
    document.getElementById("presupuesto").textContent = formatearCLP(presupuestoTotal);//modificar
    document.getElementById("lista-egresos").innerHTML=EgresosHTML;
    document.getElementById("porcentaje").textContent = porcentajes+"%";
}
let crearEgresosHTML=(descripcion,valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatearCLP(valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
}




