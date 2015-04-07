exports.create = function (request, reply) {
    request.log('debug', "Hola Mundo");
    reply.file('./login.html');
    throw new Error('something bad happened');
};
