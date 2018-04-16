var logRequest = require('../utils/log_req');
var user = require('./controllers/index');

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       userId:
 *         type: string
 *       userName:
 *         type: string
 *       password:
 *         type: string
 *       mobileNumber:
 *         type: string
 *       emailId:
 *         type: string
 *       status:
 *         type: string
 *       createAt:
 *         type: string
 *         format: date
 *       updateAt:
 *         type: string
 *         format: date
 */

module.exports = function(app) {
	/**
	 * @swagger
	 * /user:
	 *   post:
	 *     tags:
	 *       - users
	 *     description: Creates a New User
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: User
	 *         description: User Object
	 *         in: body
	 *         required: true
	 *         schema:
	 *           $ref: '#/definitions/users'
	 *     responses:
	 *       200:
	 *         description: Successfully created
	 */
	app.post("/user", logRequest, user.addUser);

	/**
	 * @swagger
	 * /user:
	 *   get:
	 *     tags:
	 *       - users
	 *     description: Returns Users By Property
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An Array of Users
	 *         schema:
	 *           $ref: '#/definitions/users'
	 */
	app.get("/user", logRequest, user.findUserByProperty);

	/**
	 * @swagger
	 * /user/{userName}:
	 *   get:
	 *     tags:
	 *       - users
	 *     description: Returns All Users
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: userName
	 *         description: User's userName
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Successfully Find
	 */
	app.get("/user/:userName", logRequest, user.findUserByUserName);

	/**
	 * @swagger
	 * /user:
	 *   get:
	 *     tags:
	 *       - users
	 *     description: Returns All Users
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: An Array of Users
	 *         schema:
	 *           $ref: '#/definitions/users'
	 */
	app.get("/userList", logRequest, user.findUserList);

	/**
	 * @swagger
	 * /user/:
	 *   put:
	 *     tags:
	 *     	 - users
	 *     description: Updates a Single User
	 *     produces: application/json
	 *     parameters:
	 *       - name: User
	 *         description: Fields for the User Resource
	 *         schema:
	 *           $ref: '#/definitions/user'
	 *     responses:
	 *       200:
	 *         description: Successfully updated
	 */
	app.put("/user", logRequest, user.updateUser);

	/**
	 * @swagger
	 * /user/:
	 *   delete:
	 *     tags:
	 *       - users
	 *     description: Deletes a Single User
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: userName
	 *         description: User's userName
	 *         in: path
	 *         required: true
	 *         type: string
	 *     responses:
	 *       200:
	 *         description: Successfully deleted
	 */
	app.delete("/user", logRequest, user.deleteUser);
}