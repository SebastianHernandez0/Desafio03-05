let inputTareas= document.querySelector("#inputTareas")
let btnTareas=document.querySelector("#btnTareas")
let ulTareas=document.querySelector(".tareas__tareas")
let tareasTotal= document.querySelector("#tareasTotal")
let ulId=document.querySelector(".tareas__id")
let tareasRealizadas=document.querySelector("#tareasRealizadas")
let tareas=[{id: Date.now(), tarea:"Entrenar",completado:false},{id:Date.now()+1,tarea:"Programar",completado:false},{id:Date.now()+2,tarea:"Leer",completado:false}]
console.log(tareas)
let ids=[1,2,3]
contador=4
function tareasTotales(){

    tareasTotales= tareas.length
    tareasTotal.innerHTML=tareasTotales

}
tareasTotales()

for (const i of ids) {
    ulId.innerHTML+=`<li>${i}</li>`
}

function actualizarTareas(){
    html=""
    for (let i of tareas) {
        html+=`<li>${i.tarea} <button onclick="tareaRealizada(${i.id})" id="btnRealizada">✔</button> <button onclick="borrarTarea(${i.id})" id="btnEliminar">✖</button></li>`

    }
    ulTareas.innerHTML=html
    tareasTotales= tareas.length
    tareasTotal.innerHTML=tareasTotales

    htmlids=""
    for (const i of ids) {
        htmlids+=`<li>${i}</li>`
    }
    ulId.innerHTML=htmlids
}

function borrarTarea(id){
    let index= tareas.findIndex((x)=> x.id ===id)
    tareas.splice(index,1)
    ids.splice(index,1)
    actualizarTareas()
    let tareasR= tareas.filter((x)=> x.completado==true)
    tareasRealizadas.innerHTML=tareasR.length
}

function tareaRealizada(id){
    let index= tareas.findIndex((x)=> x.id === id)
    


    if (tareas[index].completado==false) {
        tareas[index].completado=true;
        tareasT=tareas[index].tarea
        tareas[index].tarea="Tarea Realizada"
        console.log(tareasT)
        
    } else {

        tareas[index].completado=false
        tareas[index].tarea=tareasT
        
    }

    let tareasR= tareas.filter((x)=> x.completado==true)
    tareasRealizadas.innerHTML=tareasR.length

    actualizarTareas()
}

for (const i of tareas) {
    ulTareas.innerHTML+= `<li>${i.tarea} <button onclick="tareaRealizada(${i.id})" id="btnRealizada">✔</button> <button onclick="borrarTarea(${i.id})" id="btnEliminar">✖</button></li>`
}




btnTareas.addEventListener("click",()=>{

    tareaNueva=inputTareas.value
    tareas.push({id: Date.now(), tarea:tareaNueva,completado:false})
    inputTareas.value=""
    ids.push(contador)
    contador++
    actualizarTareas()
    ulId.innerHTML=""
    for (const i of ids) {
        ulId.innerHTML+=`<li>${i}</li>`
    }
    
    tareasTotales= tareas.length
    tareasTotal.innerHTML=tareasTotales
    

})
