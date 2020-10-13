/* RATINGS ROUTE */

/**
 * @api {get} /api/ratings/:id Get All Ratings By Game
 * @apiVersion 1.0.0
 * @apiName GetRatings
 * @apiGroup Ratings
 * @apiPermission public
 * @apiParam {String} id Game's ID
 * @apiExample {curl} Example usage:
 *     http://localhost/api/ratings/5f8305ee5d7dce5a88142c43
 * @apiSuccess {Object[]} ratings List of all game's ratings
 * @apiUse RatingListSuccessExample
 * @apiUse ServerError
 */

/**
 * @api {post} /api/ratings/create Add Rating
 * @apiVersion 1.0.0
 * @apiName AddRating
 * @apiGroup Ratings
 * @apiPermission user
 * @apiUse Header
 * @apiUse CreateRatingParams
 * @apiUse CreateRatingParamExample
 * @apiUse RatingObjectSuccesParamsExample
 * @apiUse RatingObjectSuccessExample
 * @apiUse RatingRequiredFieldsError
 * @apiError (Error 409) Conflict Game is already rated by this user
 * @apiErrorExample {json} Game Already Rated Error Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "Game already rated"
 *     }
 * @apiUse GameNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {put} /api/ratings/update Update Rating
 * @apiVersion 1.0.0
 * @apiName UpdateRating
 * @apiGroup Ratings
 * @apiPermission private
 * @apiUse Header
 * @apiUse UpdateDeleteRatingParams
 * @apiUse UpdateDeleteRatingParamExample
 * @apiUse RatingObjectSuccesParamsExample
 * @apiUse RatingObjectSuccessExample
 * @apiUse RatingRequiredFieldsError
 * @apiUse UserNotAuthorizedError
 * @apiUse GameNotFoundError
 * @apiUse RatingNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {delete} /api/ratings/delete Delete Rating
 * @apiVersion 1.0.0
 * @apiName DeleteRating
 * @apiGroup Ratings
 * @apiPermission private
 * @apiUse Header
 * @apiUse UpdateDeleteRatingParams
 * @apiUse UpdateDeleteRatingParamExample
 * @apiSuccess {String} message Confirmation message
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "message": "Rating deleted"
 *      }
 * @apiUse UserNotAuthorizedError
 * @apiUse GameNotFoundError
 * @apiUse RatingNotFoundError
 * @apiUse ServerError
 */
