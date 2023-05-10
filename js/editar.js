import Crud from "./crud.js"


const editar_reclutas = async(id) => {
            
            const nombre = document.querySelector("#nombre2")
            const edad = document.querySelector("#edad2")
            const tel = document.querySelector("#tel2")
            const email = document.querySelector("#email2")
            const direccion = document.querySelector("#direccion2")
            const fecha_Nacimiento = document.querySelector("#fecha_nacimiento2")
            const fecha_Ingreso = document.querySelector("#fecha_ingreso2")
            const team = document.querySelector("#selectTeam2")
            const numero_Identificaion = document.querySelector("#numero_identificacion2")

            let crud = new Crud("reclutas")
            await crud.put({
                "nombre": nombre.value,
                "edad": edad.value,
                "telefono": tel.value,
                "email": email.value,
                "direccion": direccion.value,
                "fecha_Nacimiento": fecha_Nacimiento.value,
                "fecha_Ingreso": fecha_Ingreso.value,
                "id_Team": team.value,
                "numero_Identificaion": numero_Identificaion.value

            }, id)
}

const mostrar_editar = async() => {

    document.addEventListener("click", async(e) => {

        if(e.target.id.split(".").includes("editar")){

            let crud = new Crud("reclutas")
            let data = await crud.get_id(e.target.id.split(".")[1])

            const nombre = document.querySelector("#nombre2").value = data.body.nombre
            const edad = document.querySelector("#edad2").value = data.body.edad
            const tel = document.querySelector("#tel2").value = data.body.telefono
            const email = document.querySelector("#email2").value = data.body.email
            const direccion = document.querySelector("#direccion2").value = data.body.direccion
            const fecha_nacimiento = document.querySelector("#fecha_nacimiento2").value = data.body.fecha_Nacimiento
            const fecha_ingreso = document.querySelector("#fecha_ingreso2").value = data.body.fecha_Ingreso
            const team = document.querySelector("#selectTeam2")
            const numero_identificacion = document.querySelector("#numero_identificacion2").value = data.body.numero_Identificaion

            let editar_form = document.querySelector(".editar_form")
            editar_form.style.display = "flex"

            document.querySelector(".editar_form").addEventListener("submit", async(e) => {

                e.preventDefault()
                
                await editar_reclutas(data.body.id)
            })
        }
    })
}

mostrar_editar()