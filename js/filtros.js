import Crud from "./crud.js"

const filtro_meses = async () => {

    let crud = new Crud("reclutas")
    let data = await crud.get()
    let mes_actual = new Date().getMonth()
    
    let aceept = []

    data.body.forEach(el => {

        if(Number(el.fecha_Ingreso.split("-")[1]) + 2 <= mes_actual){
            aceept.push(el)
        }
    })

    aceept.forEach(el => {

        document.querySelector("#meses").innerHTML += `
        
        <div class="card efectOpacity">
        <b>id</b><span>${el.id}</span><br>
        <b>Nombre</b><span>${el.nombre}</span><br>
        <b>Edad</b><span>${el.edad}</span><br>
        <b>Telefono</b><span>${el.telefono}</span><br>
        <b>Email</b><span>${el.email}</span><br>
        <b>Direccion</b><span>${el.direccion}</span><br>
        <b>Fecha de Nacimiento</b><span>${el.fecha_Nacimiento}</span><br>
        <b>Numero Identificaion</b><span>${el.numero_Identificaion}</span><br>
        <b>Fecha de Ingreso</b><span>${el.fecha_Ingreso}</span> <br>
        <div>
            <button id="editar.${el.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
            <button id="eliminar.${el.id}" class="btn">Eliminar</button>
        </div>
    </div>
        `
    })
}

const teamAsociado = async () => {

    let teamAsociado = document.querySelector("#teamAsociado")
    let crud = new Crud("team")
    let data = await crud.get()
    let cant_team = []
    data.body.forEach(el => {
        cant_team.push(el.id)
        teamAsociado.innerHTML += `
    
        <ul class="notorio" id="team-${el.id}">
            <h2 style="margin: 20px">TEAM: ${el.nombre}</h2>
        </ul>
    
    `
    })

    teamAsociado_reclutas(cant_team)
}

const teamAsociado_reclutas = async(cant_team) => {

    let crud = new Crud("reclutas")
    let data = await crud.get()
    
    data.body.forEach((recluta) => {

        cant_team.forEach(id_team => {

            if(recluta.id_Team == id_team){

                document.querySelector(`#team-${id_team}`).innerHTML += `
                
                <div class="card efectOpacity">
                <b>id</b><span>${recluta.id}</span><br>
                <b>Nombre</b><span>${recluta.nombre}</span><br>
                <b>Edad</b><span>${recluta.edad}</span><br>
                <b>Telefono</b><span>${recluta.telefono}</span><br>
                <b>Email</b><span>${recluta.email}</span><br>
                <b>Direccion</b><span>${recluta.direccion}</span><br>
                <b>Fecha de Nacimiento</b><span>${recluta.fecha_Nacimiento}</span><br>
                <b>Numero Identificaion</b><span>${recluta.numero_Identificaion}</span><br>
                <b>Fecha de Ingreso</b><span>${recluta.fecha_Ingreso}</span> <br>
                <div>
                    <button id="editar.${recluta.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
                    <button id="eliminar.${recluta.id}" class="btn">Eliminar</button>
                </div>
            </div>
                `

            }
        })
    })
}

const menores = async() => {


    let crud = new Crud("reclutas")
    let data = await crud.get()
    const menores = document.querySelector("#menores")

    data.body.forEach(recluta => {

        if(recluta.edad < 18){
            menores.innerHTML += `
            
            <div class="card efectOpacity">
            <b>id</b><span>${recluta.id}</span><br>
            <b>Nombre</b><span>${recluta.nombre}</span><br>
            <b>Edad</b><span>${recluta.edad}</span><br>
            <b>Telefono</b><span>${recluta.telefono}</span><br>
            <b>Email</b><span>${recluta.email}</span><br>
            <b>Direccion</b><span>${recluta.direccion}</span><br>
            <b>Fecha de Nacimiento</b><span>${recluta.fecha_Nacimiento}</span><br>
            <b>Numero Identificaion</b><span>${recluta.numero_Identificaion}</span><br>
            <b>Fecha de Ingreso</b><span>${recluta.fecha_Ingreso}</span> <br>
            <div>
                <button id="editar.${recluta.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
                <button id="eliminar.${recluta.id}" class="btn">Eliminar</button>
            </div>
        </div>
            
            `
        }
    })

}

const reprueba_modulo = async () => {

    let reprobaron = document.querySelector("#reprobaron")
    let crud = new Crud("evaluacion")
    let data = await crud.get()
    let crudUser = new Crud("reclutas")
    let dataAll = await crudUser.get()
    let reclutas_mal = []

    data.body.forEach(el => {
        if(el.nota < 3){

            reclutas_mal.push(el.id_recluta)
        }
    })

    reclutas_mal.forEach(id_user => {

        dataAll.body.forEach(recluta => {

            if(recluta.id == id_user){
                reprobaron.innerHTML += `
                
                <div class="card efectOpacity">
                <b>id</b><span>${recluta.id}</span><br>
                <b>Nombre</b><span>${recluta.nombre}</span><br>
                <b>Edad</b><span>${recluta.edad}</span><br>
                <b>Telefono</b><span>${recluta.telefono}</span><br>
                <b>Email</b><span>${recluta.email}</span><br>
                <b>Direccion</b><span>${recluta.direccion}</span><br>
                <b>Fecha de Nacimiento</b><span>${recluta.fecha_Nacimiento}</span><br>
                <b>Numero Identificaion</b><span>${recluta.numero_Identificaion}</span><br>
                <b>Fecha de Ingreso</b><span>${recluta.fecha_Ingreso}</span> <br>
                <div>
                    <button id="editar.${recluta.id}" style="background-color: rgb(134, 134, 46);" class="btn">Editar</button>
                    <button id="eliminar.${recluta.id}" class="btn">Eliminar</button>
                </div>
            </div>
                
                `
            }
        })
    })
}

const modulo_estudiado = async() => {

    let modulo_estudiado = document.querySelector("#modulo_estudiado")
    let crud = new Crud("skill")
    let data = await crud.get()
    let cant_team = []
    data.body.forEach(el => {
        cant_team.push(el.id)
        modulo_estudiado.innerHTML += `
    
        <ul class="notorio" id="a-${el.id}">
            <h2 style="margin: 20px">Modulo: ${el.nombre} tiene asociado las siguientes skills</h2>
        </ul>
    
    `
    })

    asociado(cant_team)

}

const asociado = async(cant_team) => {

    let crud = new Crud("modulo_skill")
    let data = await crud.get()

    data.body.forEach((recluta) => {

        cant_team.forEach(id_team => {

            if(recluta.id_skill == id_team){

                document.querySelector(`#a-${id_team}`).innerHTML += `
                
                <div class="card efectOpacity">
                <b>id</b><span>${recluta.id}</span><br>
                <b>nombre</b><span>${recluta.nombre}</span><br>
                <b>id_skill</b><span>${recluta.id_skill}</span><br>
                
            </div>
                `

            }
        })
    })
}

modulo_estudiado()
reprueba_modulo()
teamAsociado()
filtro_meses()
menores()