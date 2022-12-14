const modelotickets ={
    quieryGetUsers: "SELECT * FROM tickets",
    
    //Se sustituye cada elemento del arreglo por cada signo de interrogacion, y se acomodan en el orden respectivo
    //Si se usa 2 veces se pasa las 2 veces
    quieryGetUsersByeID: `SELECT * FROM tickets WHERE id_ticket = ?`,
    quieryDeleteUsersByeID: `UPDATE tickets SET prioridad = 'N' WHERE id_ticket = ?`,
    quieryUsersExists: `SELECT Nombre FROM tickets WHERE titulo = ?`,
    quieryAddUser:`INSERT INTO tickets (
        titulo,
        descripcion,
        prioridad
        ) VALUES (
        ?,
        ?,
        ?
        )`,
    
    quieryGetUsersInfo: `
    SELECT titulo, descripcion, prioridad
    FROM tickets
    WHERE titulo = ?`,
    
    quieryUpdateByeUsuario: `
    UPDATE tickets SET 
    titulo = ?,
    descripcion = ?,
    prioridad = ?,
    WHERE titulo = ?
    `
    }
    
    module.exports = modelotickets