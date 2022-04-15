const Message = require('../models/Message');
exports.postSavedata = async (req, res, next) => {
    // getting message data from request body
    const {username, message} = req.body;
    try {
        const msg = new Message({username, message});
        const result = await msg.createMessage();
        res.send(msg);
    } catch (error) {

        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'Item already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
        // pass error to next()
        next(errorToThrow);
    }
};