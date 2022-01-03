import mysql from 'mysql2';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jamb116',
    database: 'sistemaventas',
    insecureAuth: true,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
pool.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

export default pool;