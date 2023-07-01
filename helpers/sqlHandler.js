const mysql = require('mysql2/promise');

const sqlConnection = (dbName) => {
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "cheZ2eil",
    database: dbName
  });

  return pool;
};
  
  const runInsertQuery = async  ( query, data , type) => {
    const db = sqlConnection('userInfo');  
    const [result] = await db.query(query, data);
    db.end();
    return `Successful insertion for type ${type} under userID of ${data.PersonID}, ${result.affectedRows} new record has been created ${result.affectedRows}`
  };

  const runSelectQuery =  async (database, query) => {
    const db = await sqlConnection("userInfo");
    const [rows] = await db.query(query);
    db.end();
    const returnValue = rows
    return returnValue;
  };

  const runSelectByQuery = async (database, query) => {
      const db = await sqlConnection(database);
      const [[data]] = await db.query(query);
      db.end();
      return data;
  };

  const runUpdateUserQuery = async (database, query, data) => {
    const db = sqlConnection('userInfo');  
    const [result] = await db.query(query, data);
    db.end();
    return `Succesful update with ${result.affectedRows} user`
  }



module.exports = {
    runSelectQuery,
    runInsertQuery,
    runSelectByQuery,
    runUpdateUserQuery
};