import db from '../database';



export const getCantones = (req, res) => {



    const provincia = req.params;
    console.log(provincia);
    db.query('call ListaCantones(?)', [provincia], (err, result) => {
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
    })
}