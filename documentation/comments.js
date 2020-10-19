/* COMMENTS ROUTE */

/**
 * @api {get} /api/comments/:id Get All Comments By Game
 * @apiVersion 1.0.0
 * @apiName GetComments
 * @apiGroup Comments
 * @apiPermission public
 * @apiParam {String} id Game's ID
 * @apiExample {curl} Example usage:
 *     https://game-maze.herokuapp.com/api/comments/5f8305ee5d7dce5a88142c43
 * @apiSuccess {Object[]} comments List of all game's comments
 * @apiUse CommentListSuccessExample
 * @apiUse ServerError
 */

/**
 * @api {post} /api/comments/create Add Comment
 * @apiVersion 1.0.0
 * @apiName AddComment
 * @apiGroup Comments
 * @apiPermission user
 * @apiUse Header
 * @apiUse CreateCommentParams
 * @apiUse CreateCommentParamExample
 * @apiUse CommentObjectSuccesParamsExample
 * @apiUse CommentObjectSuccessExample
 * @apiUse CommentRequiredFieldsError
 * @apiUse GameNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {put} /api/comments/update Update Comment
 * @apiVersion 1.0.0
 * @apiName UpdateComment
 * @apiGroup Comments
 * @apiPermission private
 * @apiUse Header
 * @apiUse UpdateDeleteCommentParams
 * @apiUse UpdateDeleteCommentParamExample
 * @apiUse CommentObjectSuccesParamsExample
 * @apiUse CommentObjectSuccessExample
 * @apiUse CommentRequiredFieldsError
 * @apiUse UserNotAuthorizedError
 * @apiUse GameNotFoundError
 * @apiUse CommentNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {delete} /api/comments/delete Delete Comment
 * @apiVersion 1.0.0
 * @apiName DeleteComment
 * @apiGroup Comments
 * @apiPermission private, admin
 * @apiUse Header
 * @apiUse UpdateDeleteCommentParams
 * @apiUse UpdateDeleteCommentParamExample
 * @apiSuccess {String} message Confirmation message
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "message": "Comment deleted"
 *      }
 * @apiUse UserNotAuthorizedError
 * @apiUse GameNotFoundError
 * @apiUse CommentNotFoundError
 * @apiUse ServerError
 */
