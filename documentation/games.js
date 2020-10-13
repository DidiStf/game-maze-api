/* GAMES ROUTE */

/**
 * @api {get} /api/games Get All Games
 * @apiVersion 1.0.0
 * @apiName GetGames
 * @apiGroup Games
 * @apiPermission public
 * @apiSuccess {Object[]} games List of all games
 * @apiUse GameListSuccessExample
 * @apiUse ServerError
 */

/**
 * @api {get} /api/games/:id Get One Game
 * @apiVersion 1.0.0
 * @apiName GetGame
 * @apiGroup Games
 * @apiPermission public
 * @apiParam {String} id Game's ID
 * @apiExample {curl} Example usage:
 *     http://localhost/api/games/5f8305ee5d7dce5a88142c43
 * @apiUse GameObjectSuccesParamsExample
 * @apiUse GameObjectSuccessExample
 * @apiUse GameNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {post} /api/games/create Add Game
 * @apiVersion 1.0.0
 * @apiName AddGame
 * @apiGroup Games
 * @apiPermission admin
 * @apiUse Header
 * @apiUse CreateGameParams
 * @apiUse CreateGameParamExample
 * @apiUse GameObjectSuccesParamsExample
 * @apiUse GameObjectSuccessExample
 * @apiUse GameRequiredFieldsError
 * @apiUse NoSufficiantRightsError
 * @apiUse ServerError
 */

/**
 * @api {put} /api/games/update Update Game
 * @apiVersion 1.0.0
 * @apiName UpdateGame
 * @apiGroup Games
 * @apiPermission admin
 * @apiUse Header
 * @apiUse UpdateDeleteGameParams
 * @apiUse UpdateDeleteGameParamExample
 * @apiUse GameObjectSuccesParamsExample
 * @apiUse GameObjectSuccessExample
 * @apiUse GameRequiredFieldsError
 * @apiUse NoSufficiantRightsError
 * @apiUse GameNotFoundError
 * @apiUse ServerError
 */

/**
 * @api {delete} /api/games/delete Delete Game
 * @apiVersion 1.0.0
 * @apiName DeleteGame
 * @apiGroup Games
 * @apiPermission admin
 * @apiUse Header
 * @apiUse UpdateDeleteGameParams
 * @apiUse UpdateDeleteGameParamExample
 * @apiSuccess {String} message Confirmation message
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "message": "Game deleted"
 *      }
 * @apiUse NoSufficiantRightsError
 * @apiUse GameNotFoundError
 * @apiUse ServerError
 */
