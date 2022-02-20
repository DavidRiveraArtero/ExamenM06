
export function CrearFormularioHTML()
{
    
    var html = `
        
       <h1>HOLA MUNDO</h1>
        dsada
        
    `   
    // dom
    var div = document.createElement("div");
    div.innerHTML = html;
    document.body.append(div)
}