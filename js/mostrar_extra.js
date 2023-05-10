import Crud from "./crud.js"

const mostrar_teams = async() => {

    let table_teams = document.querySelector("#table_team")
    let crud = new Crud("team")
    let data = await crud.get()
    
    data.body.forEach(el => {
        
        table_teams.innerHTML += `
    
        <tr>    
            <td>${el.nombre}</td>
            <td>${el.trainer}</td>
            <td>
                <button class="${el.id}" id="editar_team" style="background-color: rgb(170, 170, 37);color: white">Editar</button>
                <button class="${el.id}" id="eliminar_team" style="background-color: red;color: white"">Eliminar</button>
            </td>
        </tr>
    `
    });
}

const mostrar_notas = async() => {

    let table_teams = document.querySelector("#table_nota")
    let crud = new Crud("evaluacion")
    let data = await crud.get()
    
    data.body.forEach(el => {
        
        table_teams.innerHTML += `
    
        <tr>    
            <td>${el.id_recluta}</td>
            <td>${el.id_modulo}</td>
            <td>${el.nota}</td>
            <td>
                <button class="${el.id}" id="editar_nota" style="background-color: rgb(170, 170, 37);color: white">Editar</button>
                <button class="${el.id}" id="eliminar_nota" style="background-color: red;color: white"">Eliminar</button>
            </td>
        </tr>
    `
    });
}

const btn = () => {

    document.addEventListener("click", async(e) => {
        
        if(e.target.id == "btn_add_team"){
            
            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Agregar Team</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" placeholder="Nombre">
            </div>
            <div class="blockInput">
                <label for="">trainer</label>
                <input  type="text" id="trainer_team" placeholder="trainer">
            </div>
            <input id="add_team" class="send" type="submit" value="Agregar">
                </div>
                </form>
            `

            agregar_team()
        }

        if(e.target.id == "eliminar_team"){

            let crud = new Crud("team")
            let id = e.target.className
            await crud.delete(id)

        }

        if(e.target.id == "editar_team"){

            let crud = new Crud("team")
            let id = e.target.className
            let data = await crud.get_id(id)

            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Editar Team</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" value="${data.body.nombre}" placeholder="Nombre">
            </div>
            <div class="blockInput">
                <label for="">trainer</label>
                <input value="${data.body.trainer}"  type="text" id="trainer_team" placeholder="trainer">
            </div>
            <input id="edit_team" class="send" type="submit" value="Editar">
                </div>
                </form>
            `
            editar_team(id)
        }

        if(e.target.id == "btn_add_skill"){
            
            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Agregar Skill</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" placeholder="Nombre">
            </div>
            <input id="add_skill" class="send" type="submit" value="Agregar">
                </div>
                </form>
            `
            agregar_skill()
        }

        if(e.target.id == "eliminar_skill"){
            let id = e.target.className
            let crud = new Crud("skill")
            crud.delete(id)
        }

        if(e.target.id == "editar_skill"){
            let crud = new Crud("skill")
            let id = e.target.className
            let data = await crud.get_id(id)

            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Editar Skill</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" value="${data.body.nombre}" placeholder="Nombre">
            </div>
            <input id="edit_skillsd" class="send" type="submit" value="Editar">
                </div>
                </form>
            `
            editar_skills(id)
        }

        if(e.target.id == "btn_add_modulo"){
            
            let crud = new Crud("skill")
            let data = await crud.get()
            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Agregar modulo skill</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" placeholder="Nombre">
            </div>
            <div class="blockInput">
            <label for="">Nombre</label>
            <select id="selectModulos">
            </select>
        </div>
            <input id="add_modulos" class="send" type="submit" value="Agregar">
                </div>
                </form>
            `

            data.body.forEach((el) => {
                document.querySelector("#selectModulos").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })

            agregar_modulo()
        }

        if(e.target.id == "eliminar_modulos"){
            let id = e.target.className
            let crud = new Crud("modulo_skill")
            crud.delete(id)
        }

        if(e.target.id == "editar_modulos"){
            let crud = new Crud("modulo_skill")
            let crud2 = new Crud("skill")
            let id = e.target.className
            let data = await crud.get_id(id)
            let dataAll = await crud2.get()

            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Editar Skill</h1>
                <div class="jn">
                <div class="blockInput">
                <label for="">Nombre</label>
                <input  type="text" id="nombre_team" value="${data.body.nombre}" placeholder="Nombre">
            </div>
            <select id="selectModulos"></select>
            <input id="edit_modulos" class="send" type="submit" value="Editar">
                </div>
                </form>
            `
            dataAll.body.forEach((el) => {
                document.querySelector("#selectModulos").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })

            editar_modulos(id)
        }

        if(e.target.id == "btn_add_nota"){

            let crud = new Crud("evaluacion")
            let crudModulo = new Crud("modulo_skill")
            let crudRecluta = new Crud("reclutas")
            let data = await crud.get()
            let dataModulo = await crudModulo.get()
            let dataReclutas = await crudRecluta.get()

            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Agregar Evaluacion</h1>
            <div class="blockInput">
            <label for="">id_modulo</label>

            <select id="selectModulods"></select>

            <label for="">id_recluta</label>
            <select id="selectRecluta"></select>
            <label for="">Nota</label>
            <input  type="text" id="notaaa" placeholder="nota">

            <input id="add_nota" class="send" type="submit" value="Agregar">
        </div>

                </form>
            `

            dataModulo.body.forEach((el) => {
                document.querySelector("#selectModulods").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })

            dataReclutas.body.forEach((el) => {
                document.querySelector("#selectRecluta").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })
            
            document.querySelector("#add_nota").addEventListener("click", async(e) => {
                let crud = new Crud("evaluacion")
                await crud.post({
                    "nota": document.querySelector("#notaaa").value,
                    "id_modulo": document.querySelector("#selectModulods").value,
                    "id_recluta": document.querySelector("#selectRecluta").value
                })
            })
        }

        if(e.target.id == "eliminar_nota"){
            let id = e.target.className
            let crud = new Crud("evaluacion")
            crud.delete(id)
        }

        if(e.target.id == "editar_nota"){
            let crud = new Crud("evaluacion")
            let crudModulo = new Crud("modulo_skill")
            let crudRecluta = new Crud("reclutas")
            let data = await crud.get()
            let dataModulo = await crudModulo.get()
            let dataReclutas = await crudRecluta.get()
            let id = e.target.className

            document.querySelector("#sectionForm").innerHTML += `
            <form class="formFixed">
            <h1 style="color: white">Editar Evaluacion</h1>
            <div class="blockInput">
            <label for="">id_modulo</label>

            <select id="selectModulods"></select>

            <label for="">id_recluta</label>
            <select id="selectRecluta"></select>
            <label for="">Nota</label>
            <input  type="text" id="notaaa" placeholder="nota">

            <input id="add_nota" class="send" type="submit" value="Editar">
        </div>

                </form>
            `

            dataModulo.body.forEach((el) => {
                document.querySelector("#selectModulods").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })

            dataReclutas.body.forEach((el) => {
                document.querySelector("#selectRecluta").innerHTML += `
                
                    <option value="${el.id}">${el.nombre}</option>
                `
            })

            document.querySelector("#add_nota").addEventListener("click", async(e) => {
                let crud = new Crud("evaluacion")
                await crud.put({
                    "nota": document.querySelector("#notaaa").value,
                    "id_modulo": document.querySelector("#selectModulods").value,
                    "id_recluta": document.querySelector("#selectRecluta").value
                }, id)
            })
        }
    })
}

const agregar_team = () => {

    document.querySelector("#add_team").addEventListener("click", async(e) => {

        let crud = new Crud("team")
        await crud.post({
            "nombre": document.querySelector("#nombre_team").value,
            "trainer": document.querySelector("#trainer_team").value
        })
    })
}

const editar_modulos = (id) => {
    document.querySelector("#edit_modulos").addEventListener("click", async(e) => {

        let crud = new Crud("modulo_skill")
        await crud.put({
            "nombre": document.querySelector("#nombre_team").value,
            "id_skill": document.querySelector("#selectModulos").value,
        }, id)
    })
}

const agregar_skill = () => {

    document.querySelector("#add_skill").addEventListener("click", async(e) => {

        let crud = new Crud("skill")
        await crud.post({
            "nombre": document.querySelector("#nombre_team").value,
        })
    })
}

const editar_team = (id) => {

    document.querySelector("#edit_team").addEventListener("click", async(e) => {

        let crud = new Crud("team")
        await crud.put({
            "nombre": document.querySelector("#nombre_team").value,
            "trainer": document.querySelector("#trainer_team").value
        }, id)
    })
}

const editar_skills = (id) => {

    document.querySelector("#edit_skillsd").addEventListener("click", async(e) => {

        let crud = new Crud("skill")
        await crud.put({
            "nombre": document.querySelector("#nombre_team").value,
        }, id)
    })
}

const mostrar_skills = async() => {

    let table_teams = document.querySelector("#table_skill")
    let crud = new Crud("skill")
    let data = await crud.get()
    
    data.body.forEach(el => {
        
        table_teams.innerHTML += `
    
        <tr>    
            <td>${el.nombre}</td>
            <td>
                <button class="${el.id}" id="editar_skill" style="background-color: rgb(170, 170, 37);color: white">Editar</button>
                <button class="${el.id}" id="eliminar_skill" style="background-color: red;color: white"">Eliminar</button>
            </td>
        </tr>
    `
    });
}

const mostrar_modulos = async() => {

    let table_teams = document.querySelector("#table_modulos")
    let crud = new Crud("modulo_skill")
    let data = await crud.get()
    
    data.body.forEach(el => {
        
        table_teams.innerHTML += `
    
        <tr>    
            <td>${el.nombre}</td>
            <td>${el.id_skill}</td>
            <td>
                <button class="${el.id}" id="editar_modulos" style="background-color: rgb(170, 170, 37);color: white">Editar</button>
                <button class="${el.id}" id="eliminar_modulos" style="background-color: red;color: white"">Eliminar</button>
            </td>
        </tr>
    `
    });
}

const agregar_modulo = () => {

    document.querySelector("#add_modulos").addEventListener("click", async(e) => {

        let crud = new Crud("modulo_skill")
        await crud.post({
            "nombre": document.querySelector("#nombre_team").value,
            "id_skill": document.querySelector("#selectModulos").value,
        })
    })
}


btn()
mostrar_modulos()
mostrar_skills()
mostrar_teams()
mostrar_notas()