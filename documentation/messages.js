/* MESSAGES ROUTE */

/**
 * @api {get} /api/messages/ Get All Messages By Owner
 * @apiVersion 1.0.0
 * @apiName GetMessages
 * @apiGroup Messages
 * @apiPermission private
 * @apiUse Header
 * @apiSuccess {Object[]} messages List of all user's messages
 * @apiUse MessageListSuccessExample
 * @apiUse ServerError
 */

/**
 * @api {post} /api/messages/create Add Message
 * @apiVersion 1.0.0
 * @apiName AddMessage
 * @apiGroup Messages
 * @apiPermission user
 * @apiUse Header
 * @apiUse CreateMessageParams
 * @apiUse CreateMessageParamExample
 * @apiUse MessageObjectSuccesParamsExample
 * @apiUse MessageObjectSuccessExample
 * @apiUse MessageRequiredFieldsError
 * @apiError (Error 404) NotFound Couldn't find an user with the requested id
 * @apiErrorExample {json} Recipient Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Recipient not found"
 *     }
 * @apiUse ServerError
 */

/**
 * @api {delete} /api/messages/delete Delete Message
 * @apiVersion 1.0.0
 * @apiName DeleteMessage
 * @apiGroup Messages
 * @apiPermission private
 * @apiUse Header
 * @apiUse DeleteMessageParams
 * @apiUse DeleteMessageParamExample
 * @apiSuccess {String} message Confirmation message
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "message": "Message deleted"
 *      }
 * @apiUse UserNotAuthorizedError
 * @apiUse MessageNotFoundError
 * @apiUse ServerError
 */
