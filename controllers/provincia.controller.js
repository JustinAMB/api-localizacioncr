import db from '../database';


export const getProvincias = (req, res) => {
    db.query('call ListaProvincias()', (err, result) => {
        console.log(result[0]);
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            data: result[0]
        });
    });
};