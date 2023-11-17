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
    console.log(result)
    db.end();
    return `Successful insertion for type ${type}`
  };

  const runSelectQuery =  async (database, query) => {
    const db = await sqlConnection("userInfo");
    const [rows] = await db.query(query);
    db.end();
    const returnValue = rows
    return returnValue;
  };

  const runSelectByQuery = async (database, query) => {
    console.log(query)
      const db = await sqlConnection(database);
      const [[data]] = await db.query(query);
      db.end();
      return data;
  };

  const runUpdateUserQuery = async (database, query, data) => {
    const db = sqlConnection(database);  
    const [result] = await db.query(query, data);
    db.end();
    return `Succesful update with ${result.affectedRows}`
  }

  const runDelete = async (database, query) => {
    const db = sqlConnection(database);  
    const [result] = await db.query(query);
    db.end();
    return `Succesful deletion`
  }



module.exports = {
    runSelectQuery,
    runInsertQuery,
    runSelectByQuery,
    runUpdateUserQuery,
    runDelete
};