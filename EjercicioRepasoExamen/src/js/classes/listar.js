export class listarInfo{

    // PRINTAR TODA LA INFORMACION DEL HTML
    ListInfo(html,data2){
        html+= `
        <table class='tareas' id='tabla'>
        <tr>
            <td>Nom y Cognom</td>
            <td>Email</td>
            <td>Enllaç de fitxa</td>
            <td>Enllaç als todos d’aquest</td>
        </tr>
        `
        for(var x = 0;x<data2.length;x++){
            html+=`
               
                    <tr>
                        <td>${data2[x].username}</td>
                        <td>${data2[x].id_role}</td>
                        <td>${data2[x].id_usuari}</td>
                        <td>${data2[x].password}</td> 
                    </tr>
            `
        }
        html += `</table>`
        return html   
    }

    NuevaTabla(html,data2){
        html+= `
        <table class='tareas' id='tabla'>
        <tr>
            <td>Nom y Cognom</td>
            <td>Email</td>
            <td>Enllaç de fitxa</td>
            <td>Enllaç als todos d’aquest</td>
        </tr>
        `
        for(var x = 0;x<data2.length;x++){
            html+=`
               
                    <tr>
                        <td>${data2[x].username}</td>
                        <td>${data2[x].id_role}</td>
                        <td>${data2[x].id_usuari}</td>
                        <td>${data2[x].password}</td> 
                    </tr>
            `
        }
        html += `</table>`
        return html   
    }

    
   async actualizarLista(){

    let datos;
    datos = await fetch('https://practicam06-e7727-default-rtdb.firebaseio.com/usuaris.json')
    
    datos = await datos.json()
    return datos
    
   }

    async setBoard(user,lastIndex)
    {
        try{
            const res=fetch('https://practicam06-e7727-default-rtdb.firebaseio.com/usuaris/'+lastIndex+'.json',
            {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                    
                },
                body:JSON.stringify(user),
                 
                
            })
            console.log("dentro")
            return res       

            
        }catch(error){
            body.console.log("error")
            return error
        }


    }
}