exports.create = function (request, reply) {
    request.log('debug', "Hola Mundo");
    throw new Error('something bad happened');
    reply.file('./login.html')
};
