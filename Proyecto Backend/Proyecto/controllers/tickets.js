const { request, response } = require("express");
const pool = require("../db/connection")
const modelotickets = require("../models/tickets");


const getUsers = async (req = request, res = response) =>{
    //Estructura basica de cualquier endpoint al conectar en su BD
    
    let conn;
    //Control de exepciones
    try {
        conn = await pool.getConnection()
        //Esta es la consulta mas basica, se pueden hacer mas complejas
        const users = await conn.query(modelotickets.quieryGetUsers, (error) => {throw new Error(error) })
        //Siempre validar que no se obtuvieron resultados
        if (!users) {
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
        //Lo del catch y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getUserByID = async (req = request, res = response) =>{
    //Estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {id} = req.params

    let conn;
    //Control de exepciones
    try {
        conn = await pool.getConnection()
        //Esta es la consulta mas basica, se pueden hacer mas complejas
        const [user] = await conn.query(modelotickets.quieryGetUsersByeID, [id], (error) => {throw new Error(error) })
        //Siempre validar que no se obtuvieron resultados
        if (!user) {
            res.status(404).json({msg:`No se encontro registro  ${id}`})
            return
        }
        res.json({user})
        //Lo del catch y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteUserByID = async (req = request, res = response) =>{
    //Estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {id} = req.query

    let conn;
    //Control de exepciones
    try {
        conn = await pool.getConnection()
        //Esta es la consulta mas basica, se pueden hacer mas complejas en esta se actualizara el usuario
        const {affectedRows} = await conn.query(modelotickets.quieryDeleteUsersByeID, [id], (error) => {throw new Error(error) })
        
        //Siempre validar que no se obtuvieron resultados
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo eliminar el registro con el id ${id}`})
            return
        }
        res.json({msg: `El usuario con id ${id} se elimino correctamente.`})
        //Lo del catch y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addUser = async (req = request, res = response) =>{
    //Estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const{
        titulo,
        descripcion,
        prioridad,
       
      
    } = req.body

    if (
        !titulo||
        !descripcion||
        !prioridad
       
    )
    {
        res.status(400).json({msg:"Falta informacion del usuario"})
        return
    }
  
    let conn;
    //Control de exepciones
    try {
        conn = await pool.getConnection()
        
        //Tarea aqui que el usuario no se duplique
       const user = await conn.query(modelotickets.quieryUsersExists,[titulo])
       
        if(!user){
            res.status(403).json({msg: `La persona ${titulo} ya se encuentra registrado`})
            return
        }
            //Esta es la consulta mas basica, se pueden hacer mas complejas en esta se actualizara el usuario
        const {affectedRows} = await conn.query(modelotickets.quieryAddUser, [
            titulo,
            descripcion,
            prioridad   
       
        ], (error) => {throw new Error(error)})
        //'${Genero || ''}',
        //Siempre validar que no se obtuvieron resultados
       
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo agregar el registro ${titulo}`})
            return
        }
        res.json({msg: ` ${titulo} se agrego correctamente.`})
        //Lo del catch y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
        conn.end()
        }
    }
}

const updateUserByUsuario = async (req = request, res = response) =>{
    //Estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {
        titulo,
        descripcion,
        prioridad,

    } = req.body

    if (
        !titulo||
        !descripcion||
        !prioridad
    ){
        res.status(400).json({msg:"Falta informacion "})
        return
    }

    let conn;
    //Control de exepciones
    try {
        conn = await pool.getConnection()

        //Tarea aqui que el usuario no se duplique
       const [user] = await conn.query(modelotickets.quieryGetUsersInfo,[titulo])

       if (!user){
        res.status(403).json({msg: `El ${titulo} no se encuentra registrado`})
       }
        //Esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        //Arreglar esta
        const {affectedRows} = await conn.query(modelotickets.quieryUpdateByeUsuario,[
            titulo|| user.titulo,
            descripcion|| user.prioridad,
            prioridad|| user.prioridad,
            titulo,
            ]
            , (error) => {throw new Error(error) })
            //'${Genero || ''}',
        //Siempre validar que no se obtuvieron resultados
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro ${titulo}`})
            return
        }
        res.json({msg: `El ${titulo} se actualizo correctamente.`})
        //Lo del catch y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario}