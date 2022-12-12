const express = require('express')
const router = express.Router();
const cpu = require ('os')


router.get('/info', async (req, res) => {
    data = {
        'arguments': process.argv,
        'platform': process.platform,
        'node-version': process.version,
        'memory': process.memoryUsage.rss(),
        'execpath': process.execPath,
        'pid': process.pid,
        'folder': process.execPath,
        'cpu': cpu.lenght
    }

    res.render('info', {data: data})
})
router.get('/randoms',(req,res)=>{
    const {cantidad} = req.query;
    let cantEnviada
    if(cantidad){
        cantEnviada = cantidad;
    }else{
        cantEnviada = 100000000
    }
    forked.on('message',(randoms)=>{
        res.send({'Números Random': randoms})
    })
    forked.send(cantEnviada)
})

module.exports = router;