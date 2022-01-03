import db from '../database';




export const getProvincias = (req, res) => {
    db.query('SELECT * FROM provincias', (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            result
        });
    });
};