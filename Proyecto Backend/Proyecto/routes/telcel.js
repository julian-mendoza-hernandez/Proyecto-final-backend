const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario} = require("../controllers/telcel")
const router = Router()


//http://localhost:4000/api/v1/telcel
//http://localhost:4000/api/v1/telcel/id/1

//GET
router.get("/", getUsers)

//Lo siguiente despues de //id es el identificador que esta declarado en controllers (la constante)
router.get("/id/:id", getUserByID)

//DELETE
router.delete("/", deleteUserByID)

//POST
router.post("/", addUser)

//PUT
router.put("/", updateUserByUsuario)

module.exports = router