var firebaseConfig = {
    apiKey: "AIzaSyCKtiAb0Xu2NH0FPPc3GCCDV0MlskbFqHs",
    authDomain: "registro-de-empleados-b0372.firebaseapp.com",
    databaseURL: "https://registro-de-empleados-b0372-default-rtdb.firebaseio.com",
    projectId: "registro-de-empleados-b0372",
    storageBucket: "registro-de-empleados-b0372.appspot.com",
    messagingSenderId: "254572098046",
    appId: "1:254572098046:web:6291d175e252c512a090af",
    measurementId: "G-Q3DLZX907W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}
function createR() {
    document.getElementById("Input1").disabled = false;
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var celular = document.getElementById("Input3").value;
    var area = document.getElementById("Input4").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var Empleado = {
            id, //matricula:id
            nombre,
            celular,
            area,
        }

        //console.log(Empleado);

        firebase.database().ref('Empleados/' + id).update(Empleado).then(() => {
           resetFields();
        }).then(()=>{
           read();
        });

        swal("Listo!", "Agregado correctamente", "success");

        
    } 
    else {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
        //firebase.database().ref('users/' + userId).set({
    //    username: name,
    //    email: email,
    //    profile_picture : imageUrl
    //  });
    //https://firebase.google.com/docs/database/web/read-and-write?hl=es

  
    //Esto se usa cuando no tienen un id/matricula y Firebase les genera una
    //automaticamente
    //const key = firebase.database().ref().child('Empleados').push().key;
    //data[`Empleados/${key}`]= Empleado;
    //firebase.database().ref().update(data).then(()=>{
    //  alert('Agregado exitosamente');
    //})
}

function read(){
    document.getElementById("Table1").innerHTML='';

    var ref = firebase.database().ref('Empleados');
/**   
   ref.on('value', function(snapshot) {
        snapshot.forEach(row=>{
            printRow(row.val());
        })
    });
 */
   
    ref.on("child_added", function(snapshot) {
        printRow(snapshot.val());
    });

}

function printRow(Empleado){
    
    if(Empleado!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = Empleado.id;
        cell2.innerHTML = Empleado.nombre; 
        cell3.innerHTML = Empleado.celular;
        cell4.innerHTML = Empleado.area; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${Empleado.id})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+Empleado.id+')">Modificar</button>';
    }
}

function deleteR(id){
    firebase.database().ref('Empleados/' + id).set(null).then(() => {
      read();
    }).then(()=>{
       swal("Listo!", "Eliminado correctamente", "success");
    });
}

function seekR(id){
    var ref = firebase.database().ref('Empleados/' + id);
    ref.on('value', function(snapshot) {
      updateR(snapshot.val());
    });
}

function updateR(Empleado){
    if(Empleado!=null)
    {
        document.getElementById("Input1").value=Empleado.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=Empleado.nombre;
        document.getElementById("Input3").value=Empleado.celular;
        document.getElementById("Input4").value=Empleado.area;
    }
}


//Para consulta de area
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;

    var ref = firebase.database().ref("Empleados");
    ref.orderByChild("area").equalTo(c).on("child_added", function(snapshot) {
        printRowQ(snapshot.val());
    });

}


function printRowQ(Empleado){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = Empleado.id;
    cell2.innerHTML = Empleado.nombre; 
    cell3.innerHTML = Empleado.celular;
    cell4.innerHTML = Empleado.area; 
   
}