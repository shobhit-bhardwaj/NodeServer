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
 *         enum: [ACTIVE, INACTIVE]
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
	 *       - name: User Model
	 *         description: User Object
	 *         in: body
	 *         required: true
	 *         schema:
	 *           $ref: '#/definitions/users'
	 *     responses:
	 *       200:
	 *         description: User Created Successfully
	 */
	app.post("/user", logRequest, user.addUser);

	/**
	 * @swagger
	 * /user?userName={userName}&mobileNumber={mobileNumber}&emailId={emailId}&status={status}:
	 *   get:
	 *     tags:
	 *       - users
	 *     description: Returns Users By Property
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: userName
	 *         in: query
	 *         required: false
	 *       - name: mobileNumber
	 *         in: query
	 *         required: false
	 *       - name: emailId
	 *         in: query
	 *         required: false
	 *       - name: status
	 *         in: query
	 *         required: false
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
	 *     description: Returns User By Username
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: userName
	 *         description: User Name
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
	 * /user/{userName}:
	 *   put:
	 *     tags:
	 *     	 - users
	 *     description: Updates a Single User
	 *     produces: application/json
	 *     parameters:
	 *       - name: userName
	 *         in: path
	 *         required: true
	 *       - name: User
	 *         in: body
	 *         description: Fields for the user resource
	 *         schema:
	 *           $ref: '#/definitions/users'
	 *     responses:
	 *       200:
	 *         description: Successfully updated
	 */
	app.put("/user/:userName", logRequest, user.updateUser);

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
	 *       - name: User
	 *         description: User's User Name
	 *         in: body
	 *         required: true
	 *         schema:
	 *           $ref: '#/definitions/users'
	 *     responses:
	 *       200:
	 *         description: Successfully deleted
	 */
	app.delete("/user", logRequest, user.deleteUser);
}