/* USERS ROUTE */

/**
 * @api {get} /api/users Get All Users
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 * @apiPermission super-admin
 * @apiSuccess {Object[]} users List of all users
 * @apiUse UserListSuccessExample
 * @apiUse NoSufficiantRightsError
 * @apiUse ServerError
 */

/**
 * @api {get} /api/users/getOneByToken Get User By Token
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
 * @apiPermission private
 * @apiUse UserObjectSuccesParamsExample
 * @apiUse UserObjectSuccessExample
 * @apiUse ServerError
 */

/**
 * @api {post} /api/users/create Add User
 * @apiVersion 1.0.0
 * @apiName AddUser
 * @apiGroup Users
 * @apiPermission public
 * @apiUse CreateUserParams
 * @apiUse CreateUserParamExample
 * @apiUse UserTokenObjectSuccesParamsExample
 * @apiUse UserTokenObjectSuccessExample
 * @apiUse CreateUserRequiredFieldsError
 * @apiUse EmailTakenError
 * @apiUse UsernameTakenError
 * @apiUse ServerError
 */

/**
 * @api {post} /api/users/login Login User
 * @apiVersion 1.0.0
 * @apiName LoginUser
 * @apiGroup Users
 * @apiPermission user
 * @apiUse CreateUserParams
 * @apiUse CreateUserParamExample
 * @apiUse UserTokenObjectSuccesParamsExample
 * @apiUse UserTokenObjectSuccessExample
 * @apiUse LoginUserRequiredFieldsError
 * @apiUse InvalidCredentialsError
 * @apiUse ServerError
 */

/**
 * @api {put} /api/users/update Update User
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiPermission private
 * @apiUse Header
 * @apiUse UpdateDeleteUserParams
 * @apiUse UpdateDeleteUserParamExample
 * @apiUse UserObjectSuccesParamsExample
 * @apiUse UserObjectSuccessExample
 * @apiUse UpdateUserRequiredFieldsError
 * @apiUse UserNotAuthorizedError
 * @apiUse UserNotFoundError
 * @apiUse EmailTakenError
 * @apiUse UsernameTakenError
 * @apiUse ServerError
 */

/**
 * @api {put} /api/users/setAdmin Set User Admin Rights
 * @apiVersion 1.0.0
 * @apiName SetUserAdminRights
 * @apiGroup Users
 * @apiPermission super-user
 * @apiUse Header
 * @apiUse UpdateDeleteUserParams
 * @apiUse UpdateDeleteUserParamExample
 * @apiUse UserObjectSuccesParamsExample
 * @apiUse UserObjectSuccessExample
 * @apiUse SetAdminRightsRequiredFieldsError
 * @apiUse NoSufficiantRightsError
 * @apiUse UserNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {delete} /api/users/delete Delete User
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiPermission super-admin
 * @apiUse Header
 * @apiUse UpdateDeleteUserParams
 * @apiUse UpdateDeleteUserParamExample
 * @apiSuccess {String} message Confirmation message
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "message": "User deleted"
 *      }
 * @apiUse NoSufficiantRightsError
 * @apiUse UserNotFoundError
 * @apiUse ServerError
 */
