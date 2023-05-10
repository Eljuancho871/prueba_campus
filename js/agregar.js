import Crud from "./crud.js"

const nombre = document.querySelector("#nombre")
const edad = document.querySelector("#edad")
const tel = document.querySelector("#tel")
const email = document.querySelector("#email")
const direccion = document.querySelector("#direccion")
const fecha_nacimiento = document.querySelector("#fecha_nacimiento")
const fecha_ingreso = document.querySelector("#fecha_ingreso")
const team = document.querySelector("#selectTeam")
const numero_identificacion = document.querySelector("#numero_identificacion")

const agregar_regluta = async() => {

    let crud = new Crud("reclutas")

    await crud.post(
        {
            "nombre": nombre.value,
            "edad": edad.value,
            "telefono": tel.value,
            "email": email.value,
            "direccion": direccion.value,
            "fecha_Nacimiento": fecha_nacimiento.value,
            "numero_Identificaion": numero_identificacion.value,
            "fecha_Ingreso": fecha_ingreso.value,
            "id_Team": team.value
        }
    )
}

let form = document.querySelector("#agregar")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    agregar_regluta()
    e.stopPropagation()
})


const agregar_teams = () => {

    
}