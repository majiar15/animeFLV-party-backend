const salaModel = require('../models/sala');
exports.crear = function(req, res) {
    let ArrayLetters = ['a','b','c','d','f','g','h','i','j','k','l','ñ','n','m','o','p','q','r','s','t','u','v','w','x','y','z'];
    let code;
    
    condition = true;
    while (condition) {
        code = '';
        for (let i = 0; i < 6; i++) {
            code += ArrayLetters[Math.floor(Math.random() * 26)];
        }
        code = code.toUpperCase();
       condition = verifyCode(code);      
                   
    }
    // console.log(req.body);
    // salaModel.create({codigo: code, url: req.body.url, participantes: 1})
    //     .then(function(collection) {
    //         res.status(200).json({codigo:code})
    //         console.log('Collection is created! ');
    //     })
    //     .catch(function(error) {
    //         res.status(400).send("error ", error)
    //         console.log('Collection is error! ',error);
    //     });
            res.status(200).json({codigo:code})


}
exports.entrar = function (req, res) {
    let codigo = req.body.codigo;
    console.log(codigo);
    salaModel.findOne({codigo: codigo})
        .then((colection) =>{
            console.log(colection);
            if(colection){
                res.status(200).json(colection)
                console.log("se encontro");
            }else{
                res.status(400).json(colection)
                console.log("no hay ningun registro que coincida");
            }
            
        })
        .catch((error)=>{
            res.status(400).send("error ", error)
            console.log("no se encontro");
        });
    
}

function verifyCode(code) {
    salaModel.findOne({codigo: code})
    .then(query=> {
        if(!query){
                return false;
                
            }else{
                return true;
            }
        })
        .catch(() =>{
            return true;
        });    
}