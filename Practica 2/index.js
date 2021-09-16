function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}

function createR() {
    
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var celular = document.getElementById("Input3").value;
    var Area = document.getElementById("Input4").value;


    if (id.length > 0) {
        var empleado = {
            id, 
            nombre,
            celular,
            Area,
        }

        var lista_empleados=JSON.parse(localStorage.getItem("empleados"));

        if(lista_empleados==null)
        { 
            var lista_empleados = [];
        }
        
        const existe = lista_empleados.some(element=>element.id==id); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_empleados=lista_empleados.filter(empleado=>empleado.id!=id);

            }
                
            lista_empleados.push(empleado);
            var temporal = lista_empleados.sort((a,b) => a.id-b.id);
            localStorage.setItem("empleados", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de empleado","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_empleados = JSON.parse(localStorage.getItem("empleados"));
    
     
    if(lista_empleados)
    {
        lista_empleados.forEach((empleado)=>printRow(empleado));
    }
}


function printRow(empleado){
    
    if(empleado!=null){
        var table = document.getElementById("Table1"); 

        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        cell1.innerHTML = empleado.id;
        cell2.innerHTML = empleado.nombre; 
        cell3.innerHTML = empleado.celular;
        cell4.innerHTML = empleado.Area; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${empleado.id})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+empleado.id+')">Modificar</button>';
    }
}

function deleteR(id){
    const lista_empleados = JSON.parse(localStorage.getItem("empleados"));
    var temporal=lista_empleados.filter(empleado=>empleado.id!=id);
    localStorage.setItem("empleados", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("empleados");
    }
  
    read();
    
}

function seekR(id){

    const lista_empleados = JSON.parse(localStorage.getItem("empleados"));
    var empleado=lista_empleados.filter(empleado=>empleado.id==id);
    updateR(empleado[0]);
}

function updateR(empleado){
    if(empleado!=null)
    {
        document.getElementById("Input1").value=empleado.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=empleado.nombre;
        document.getElementById("Input3").value=empleado.celular;
        document.getElementById("Input4").value=empleado.Area;
    }
}



function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;
  
    const lista_empleados = JSON.parse(localStorage.getItem("empleados"));
    var empleadosC=lista_empleados.filter(empleado=>empleado.Area==c);
    if(empleadosC)
    {
        empleadosC.forEach((empleado)=>printRowQ(empleado));
    }

}


function printRowQ(empleado){

    var table = document.getElementById("Table2"); 
    
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = empleado.id;
    cell2.innerHTML = empleado.nombre; 
    cell3.innerHTML = empleado.celular;
    cell4.innerHTML = empleado.Area; 
   
}