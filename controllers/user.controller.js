const { UserModel } = require("../db");

/**
 * @api {get} /v1/user/ Get all user list
 * @apiGroup User
 * @apiName GetAllUsers
 *
 * @apiHeader {String} token JWT token geneated from /login
 *
 * @apiParam {Number} skip Offset useful for pagination
 * @apiParam {Number} limit No of entries to fetch
 */
async function getAll(req, res) {
    // TODO - Add Joi validation for skip and limit
    
    // if skip in query string use it else default to 0
    const offset = +req.query.skip ? +req.query.skip : 0;

    // if limit in query string then use it else default to 10
    const limit = +req.query.limit ? +req.query.limit : 10;

    // fetch from database
    const users = await UserModel
        .findAll({
            limit,
            offset
        });
    
    // send response
    res.send({
        data: {
            users
        }
    });
}

/**
 * @api {post} /v1/user/ Create new user
 * @apiGroup User
 * @apiName CreateNewUser
 *
 * @apiHeader {String} token JWT token geneated from /login
 *
 * @apiParam {Number} id User Number
 * @apiParam {String} firstName
 * @apiParam {String} lastName
 * @apiParam {String} email
 */
async function create(req, res) {
    // TODO - Add validation
    
    const user = await UserModel.create({
        id: req.body.empNo,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
    });

    res.send({
        data: user
    });
}

/**
 * @api {get} /v1/user/:id Create new user
 * @apiGroup User
 * @apiName GetUser
 *
 * @apiHeader {String} token JWT token geneated from /login
 *
 */
async function show(req, res) {
    const { id } = req.params;

    // fetch from database
    const users = await UserModel
        .findByPk(id);

    // send response
    res.send({
        data: users
    });
}

module.exports = {
    getAll,
    create,
    show
};