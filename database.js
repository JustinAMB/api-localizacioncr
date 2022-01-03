import mysql from 'mysql2';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jamb116',
    database: 'localizacioncr',
    insecureAuth: true,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


pool.getConnection(function(err, connection) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

export default pool;