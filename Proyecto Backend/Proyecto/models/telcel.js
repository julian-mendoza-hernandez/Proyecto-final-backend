const modelotelcel ={
quieryGetUsers: "SELECT * FROM telcel",

//Se sustituye cada elemento del arreglo por cada signo de interrogacion, y se acomodan en el orden respectivo
//Si se usa 2 veces se pasa las 2 veces
quieryGetUsersByeID: `SELECT * FROM telcel WHERE ID = ?`,
quieryDeleteUsersByeID: `UPDATE telcel SET Activo = 'N' WHERE ID = ?`,
quieryUsersExists: `SELECT Nombre FROM telcel WHERE Nombre = ?`,
quieryAddUser:`INSERT INTO telcel (
    Nombre,
    Apellidos,
    Telefono,
    Email,
    Asunto,
    Activo 
    ) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
    )`,

quieryGetUsersInfo: `
SELECT Nombre, Apellidos, Telefono, Email, Asunto
FROM telcel
WHERE Nombre = ?`,

quieryUpdateByeUsuario: `
UPDATE telcel SET 
Nombre = ?,
Apellidos = ?,
Telefono = ?,
Email = ?,
Asunto = ?,
Activo = ?
WHERE Nombre = ?
`
}

module.exports = modelotelcel