import {listarInfo} from "./classes/listar";
import {User} from "./classes/userClass";
let listarInf = new listarInfo;
export function CrearFormularioHTML()
{
    
    var html = `
        <input id='nombre' type='text'></br></br>
        <input id='apellido' type='text'></br>
        <button id='crear'>CrearUsuario</button>
   
    `
    
    // RECOGEMOS Y LUEGO PRINTAMOS LA INFORAMCION EN TABLAS 
    var div = document.createElement("div");
    
    // CREO QUE TODO SE TENDRA QUE HACER DENTRO DEL PRIMER THEN LA PRIMERA VEZ ES PARA MOSTRAR PUEDE QUE LO NECESITE DE NUEVO
        
    var data2 = listarInf.actualizarLista().then((value)=>{
        div.innerHTML = listarInf.ListInfo(html,value); // LLAMAMOS AL METODO GETINFO PARA PODER AÑADIR LAS TABLAS
        document.body.append(div) 
        
        // ELEMENTOS
        var botonCrear = document.getElementById('crear') // BOTON PARA CREAR
        var txtNombre = document.getElementById('nombre') // INPUT NOMBRE
        var txtApellido = document.getElementById('apellido') // INPUT DEL APELLIDO
        var tabla = document.getElementById('tabla')
        
        // BOTON PARA CREAR NUEVOS USUARIOS
        botonCrear.addEventListener('click',event=>{
          
            var lastindex = 0;
            // BUCLE PARA RECOGER EL ULTIMO ID
            for(var x = 0; x<value.length;x++){
                lastindex = x;
            }
            lastindex+=1
            var user = new User(2,lastindex, txtNombre.value, txtApellido.value)
            
            listarInf.setBoard(user, lastindex).then(()=>{
                tabla.remove();
                listarInf.actualizarLista().then((value2)=>{
                    div.innerHTML = listarInf.NuevaTabla(html,value2);
                })
            });
        })
    })   
}