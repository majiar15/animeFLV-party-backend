const server = require('../app');

exports.pause = function(req, res) {
    
    server.io.sockets.emit('pause');

    res.status(200).json({
        "message": "pausado correctamente",
    });
}
