const express = require("express")
const app = express();
const cors = require("cors")
const router = express.Router()

app.use(cors())

app.use(router.get('/api/basah', (req, res, next) => {
    res.status(200).json({
        dataUser:[
            {
                nama: "Bisma",
                alamat: "Bida ayu",
                nomorhp: 085355301642,
                jenisSampah: 'Plastik',
                berat: 5
            },
            {
                nama: "Sultan",
                alamat: "Aviari",
                nomorhp: 085356647489,
                jenisSampah: 'Kaleng',
                berat: 3
            }
            
        ]
    })
}))

module.exports = app