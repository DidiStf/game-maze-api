/* DEFINED BLOCKS */

/* GLOBAL */

/**
 * @apiDefine Header
 * @apiHeader {String} x-auth-token User's unique access-token.
 * @apiHeaderExample {json} Header Example:
 *     {
 *       "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *     }
 */

/**
 * @apiDefine MissingTokenError
 * @apiError (Error 401) Unauthorized Missing authentication token.
 * @apiErrorExample {json} Missing Token Error Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "No token, authorisation denied"
 *     }
 */

/**
 * @apiDefine InvalidTokenError
 * @apiError (Error 401) Unauthorized Invalid authentication token.
 * @apiErrorExample {json} Invalid Token Error Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "Token is not valid"
 *     }
 */

/**
 * @apiDefine ServerError
 * @apiError (Error 500) InternalServerError A server error occurred
 * @apiErrorExample {json} Server Error Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "message": "Server Error"
 *     }
 */

/* GAME */

/**
 * @apiDefine GameListSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 * [
 *       {
 *         "averageRating": 0,
 *         "genres": [
 *            "platformer",
 *            "adventure"
 *           ],
 *         "platforms": [
 *            "PC",
 *            "Xbox",
 *            "Switch"
 *          ],
 *         "_id": "5f8305ee5d7dce5a88142c43",
 *         "description": "Ori and the Blind Forest is a 2D platform game...",
 *         "developer": "Moon Studios",
 *         "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
 *         "publisher": "Microsoft Studios",
 *         "releaseDate": "2015-03-11T00:00:00.283Z",
 *         "trailerUrl": "https://www.youtube.com/watch?v=cklw-Yu3moE",
 *         "title": "Ori And The Blind Forest",
 *         "createdAt": "2020-10-11T13:17:34.831Z",
 *         "updatedAt": "2020-10-11T13:17:34.831Z",
 *         "__v": 0
 *      },
 *      {
 *         "averageRating": 0,
 *         "genres": [
 *            "platformer",
 *            "adventure"
 *         ],
 *         "platforms": [
 *            "PC",
 *            "Xbox One",
 *            "Xbox Series X/S",
 *            "Switch"
 *         ],
 *         "_id": "5f8308395d7dce5a88142c44",
 *         "description": "Ori and the Will of the Wisps is a platform-adventure Metroidvania video game...",
 *         "developer": "Moon Studios",
 *         "imageUrl": "https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg",
 *         "publisher": "Xbox Game Studios",
 *         "releaseDate": "2020-03-11T00:00:00.283Z",
 *         "trailerUrl": "https://www.youtube.com/watch?v=uVS0GZpPq_A",
 *         "title": "Ori And The Wild Wisps",
 *         "createdAt": "2020-10-11T13:27:21.573Z",
 *         "updatedAt": "2020-10-11T13:27:21.573Z",
 *         "__v": 0
 *      }
 * ]
 */

/**
 * @apiDefine GameObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "averageRating": 0,
 *         "genres": [
 *            "platformer",
 *            "adventure"
 *           ],
 *         "platforms": [
 *            "PC",
 *            "Xbox",
 *            "Switch"
 *          ],
 *         "_id": "5f8305ee5d7dce5a88142c43",
 *         "description": "Ori and the Blind Forest is a 2D platform game...",
 *         "developer": "Moon Studios",
 *         "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
 *         "publisher": "Microsoft Studios",
 *         "releaseDate": "2015-03-11T00:00:00.283Z",
 *         "trailerUrl": "https://www.youtube.com/watch?v=cklw-Yu3moE",
 *         "title": "Ori And The Blind Forest",
 *         "createdAt": "2020-10-11T13:17:34.831Z",
 *         "updatedAt": "2020-10-11T13:17:34.831Z",
 *         "__v": 0
 *      }
 */

/**
 * @apiDefine CreateGameParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *         "title": "Ori And The Blind Forest",
 *         "description": "Ori and the Blind Forest is a 2D platform game...",
 *         "genres": [
 *            "platformer",
 *            "adventure"
 *           ],
 *         "platforms": [
 *            "PC",
 *            "Xbox",
 *            "Switch"
 *          ],
 *         "developer": "Moon Studios",
 *         "publisher": "Microsoft Studios",
 *         "releaseDate": "2015-03-11T00:00:00.283Z",
 *         "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
 *         "trailerUrl": "https://www.youtube.com/watch?v=cklw-Yu3moE"
 *      }
 */

/**
 * @apiDefine UpdateDeleteGameParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *         "id": "5f8305ee5d7dce5a88142c43",
 *         "title": "Ori And The Blind Forest",
 *         "description": "Ori and the Blind Forest is a 2D platform game...",
 *         "genres": [
 *            "platformer",
 *            "adventure"
 *           ],
 *         "platforms": [
 *            "PC",
 *            "Xbox",
 *            "Switch"
 *          ],
 *         "developer": "Moon Studios",
 *         "publisher": "Microsoft Studios",
 *         "releaseDate": "2015-03-11T00:00:00.283Z",
 *         "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
 *         "trailerUrl": "https://www.youtube.com/watch?v=cklw-Yu3moE"
 *      }
 */

/**
 * @apiDefine GameObjectSuccesParamsExample
 * @apiSuccess {String} _id The Game's ID
 * @apiSuccess {Number} averageRating Average rating
 * @apiSuccess {String} description Description
 * @apiSuccess {String} developer Developer
 * @apiSuccess {String[]} genres List of game's genres
 * @apiSuccess {String} imageUrl Image URL
 * @apiSuccess {String[]} platforms List of game's platforms
 * @apiSuccess {String} publisher Publisher
 * @apiSuccess {String} title Title
 * @apiSuccess {Date} releaseDate Date when the game was released
 * @apiSuccess {String} trailerUrl Trailer URL
 * @apiSuccess {Date} createdAt Date when the game information was added
 * @apiSuccess {Date} updatedAt Date when the game information was last updated
 */

/**
 * @apiDefine CreateGameParams
 * @apiParam {String} description Description
 * @apiParam {String} developer Developer
 * @apiParam {String[]} genres List of game's genres
 * @apiParam {String} imageUrl Image URL
 * @apiParam {String[]} platforms List of game's platforms
 * @apiParam {String} publisher Publisher
 * @apiParam {String} title Title
 * @apiParam {Date} releaseDate Date when the game was released
 * @apiParam {String} trailerUrl Trailer URL
 */

/**
 * @apiDefine UpdateDeleteGameParams
 * @apiParam {String} id The Game's ID
 * @apiParam {String} description Description
 * @apiParam {String} developer Developer
 * @apiParam {String[]} genres List of game's genres
 * @apiParam {String} imageUrl Image URL
 * @apiParam {String[]} platforms List of game's platforms
 * @apiParam {String} publisher Publisher
 * @apiParam {String} title Title
 * @apiParam {Date} releaseDate Date when the game was released
 * @apiParam {String} trailerUrl Trailer URL
 */

/**
 * @apiDefine GameNotFoundError
 * @apiError (Error 404) NotFound Couldn't find a game with the requested id
 * @apiErrorExample {json} Game Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Game not found"
 *     }
 */

/**
 * @apiDefine GameRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing required params: genres, imageUrl, platforms or title
 * @apiErrorExample {json} Game Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Genres is required.",
 *          "param": "genres",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "ImageUrl is required.",
 *          "param": "imageUrl",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Platforms is required.",
 *          "param": "platforms",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Title is required.",
 *          "param": "title",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/* COMMENT */

/**
 * @apiDefine CommentListSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *      "_id": "5f84765397f7c853443fc98a",
 *      "author": {
 *          "_id": "5f8474c497f7c853443fc988",
 *          "avatar": "2",
 *          "username": "user2"
 *      },
 *      "content": "Me too",
 *      "game": "5f8305ee5d7dce5a88142c43",
 *      "title": "Best Game Ever",
 *      "createdAt": "2020-10-12T15:29:23.977Z",
 *      "updatedAt": "2020-10-12T15:29:23.977Z",
 *      "__v": 0
 *     },
 *     {
 *      "_id": "5f8475e197f7c853443fc989",
 *      "author": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *      },
 *      "content": "Really love this game.",
 *      "game": "5f8305ee5d7dce5a88142c43",
 *      "title": "Awesome Game",
 *      "createdAt": "2020-10-12T15:27:29.056Z",
 *      "updatedAt": "2020-10-12T15:27:29.056Z",
 *      "__v": 0
 *     }
 *    ]
 */

/**
 * @apiDefine CommentObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *     "_id": "5f8475e197f7c853443fc989",
 *     "author": "5f7a43c38506ae29609f1dba",
 *     "content": "Really love this game.",
 *     "game": "5f8305ee5d7dce5a88142c43",
 *     "title": "Awesome Game",
 *     "createdAt": "2020-10-12T15:27:29.056Z",
 *     "updatedAt": "2020-10-12T15:27:29.056Z",
 *     "__v": 0
 *    }
 */

/**
 * @apiDefine CreateCommentParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *        "content":"Really love this game.",
 *        "game": "5f8305ee5d7dce5a88142c43",
 *        "title": "Awesome Game"
 *      }
 */

/**
 * @apiDefine UpdateDeleteCommentParamExample
 * @apiParamExample {json} Example Body:
 *    {
 *     "id": "5f8475e197f7c853443fc989",
 *     "author": {
 *          "id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *      },
 *     "content": "Really love this game.",
 *     "game": "5f8305ee5d7dce5a88142c43",
 *     "title": "Awesome Game",
 *     "createdAt": "2020-10-12T15:27:29.056Z",
 *     "updatedAt": "2020-10-12T15:27:29.056Z",
 *     "__v": 0
 *    }
 */

/**
 * @apiDefine CommentObjectSuccesParamsExample
 * @apiSuccess {String} _id The Comment's ID
 * @apiSuccess {String} author Author's ID
 * @apiSuccess {String} content Content
 * @apiSuccess {String} game Game's ID
 * @apiSuccess {String} title Title
 * @apiSuccess {Date} createdAt Date when the comment information was added
 * @apiSuccess {Date} updatedAt Date when the comment information was last updated
 */

/**
 * @apiDefine CreateCommentParams
 * @apiParam {String} content Content
 * @apiParam {String} game Game's ID
 * @apiParam {String} title Title
 */

/**
 * @apiDefine UpdateDeleteCommentParams
 * @apiParam {String} id The Comment's ID
 * @apiParam {Object} author Author's object
 * @apiParam {String} author._id Author's ID
 * @apiParam {String} author.avatar Author's avatar
 * @apiParam {String} author.username Author's username
 * @apiParam {String} content Content
 * @apiParam {String} game Game's ID
 * @apiParam {String} title Title
 * @apiParam {Date} createdAt Date when the comment information was added
 * @apiParam {Date} updatedAt Date when the comment information was last updated
 */

/**
 * @apiDefine CommentNotFoundError
 * @apiError (Error 404) NotFound Couldn't find a comment with the requested id
 * @apiErrorExample {json} Comment Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Comment not found"
 *     }
 */

/**
 * @apiDefine CommentRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing required params: game or title
 * @apiErrorExample {json} Comment Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Game is required.",
 *          "param": "game",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Title is required.",
 *          "param": "title",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/* MESSAGE */

/**
 * @apiDefine MessageListSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *      "_id": "5f84b35e66fccf5314dbbfd6",
 *      "content": "Hello, this is my first message ever.",
 *      "owner": "5f7a43c38506ae29609f1dba",
 *      "recipient": {
 *          "_id": "5f8474c497f7c853443fc988",
 *          " avatar": "2",
 *          "username": "user2"
 *      },
 *      "sender": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *      },
 *      "subject": "Hi",
 *      "createdAt": "2020-10-12T19:49:50.781Z",
 *      "updatedAt": "2020-10-12T19:49:50.781Z",
 *      "__v": 0
 *     },
 *     {
 *      "_id": "5f84b38866fccf5314dbbfd9",
 *      "content": "Hello, nice to hear from you!",
 *      "owner": "5f7a43c38506ae29609f1dba",
 *      "recipient": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *      },
 *      "sender": {
 *          "_id": "5f8474c497f7c853443fc988",
 *          " avatar": "2",
 *          "username": "user2"
 *      },
 *      "subject": "Hi there",
 *      "createdAt": "2020-10-12T19:50:32.849Z",
 *      "updatedAt": "2020-10-12T19:50:32.849Z",
 *      "__v": 0
 *     }
 *    ]
 */

/**
 * @apiDefine MessageObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "_id": "5f84b38866fccf5314dbbfd8",
 *      "content": "Hello, nice to hear from you!",
 *      "owner": "5f8474c497f7c853443fc988",
 *      "recipient": "5f7a43c38506ae29609f1dba",
 *      "sender": "5f8474c497f7c853443fc988",
 *      "subject": "Hi there",
 *      "createdAt": "2020-10-12T19:50:32.810Z",
 *      "updatedAt": "2020-10-12T19:50:32.810Z",
 *      "__v": 0
 *    }
 */

/**
 * @apiDefine CreateMessageParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *       "content": "Hello, nice to hear from you!",
 *       "recipient": "5f7a43c38506ae29609f1dba",
 *       "subject": "Hi there"
 *      }
 */

/**
 * @apiDefine DeleteMessageParamExample
 * @apiParamExample {json} Example Body:
 *    {
 *     "id": "5f84b38866fccf5314dbbfd8",
 *     "content": "Hello, nice to hear from you!",
 *     "owner": "5f8474c497f7c853443fc988",
 *     "recipient": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *      },
 *      "sender": {
 *          "_id": "5f8474c497f7c853443fc988",
 *          "avatar": "2",
 *          "username": "user2"
 *      },
 *     "subject": "Hi there",
 *     "createdAt": "2020-10-12T19:50:32.810Z",
 *     "updatedAt": "2020-10-12T19:50:32.810Z",
 *     "__v": 0
 *    }
 */

/**
 * @apiDefine MessageObjectSuccesParamsExample
 * @apiSuccess {String} _id The Message's ID
 * @apiSuccess {String} content Content
 * @apiSuccess {String} owner Owner's ID
 * @apiSuccess {String} recipient Recipient's ID
 * @apiSuccess {String} sender Sender's ID
 * @apiSuccess {String} subject Subject
 * @apiSuccess {Date} createdAt Date when the message information was added
 * @apiSuccess {Date} updatedAt Date when the message information was last updated
 */

/**
 * @apiDefine CreateMessageParams
 * @apiParam {String} content Content
 * @apiParam {String} recipient Recipient's ID
 * @apiParam {String} subject Subject
 */

/**
 * @apiDefine DeleteMessageParams
 * @apiParam {String} id The Message's ID
 * @apiParam {String} content Content
 * @apiParam {String} owner Owner's ID
 * @apiParam {Object} recipient Recipient's object
 * @apiParam {String} recipient._id Recipient's ID
 * @apiParam {String} recipient.avatar Recipient's avatar
 * @apiParam {String} recipient.username Recipient's username
 * @apiParam {Object} sender Sender's object
 * @apiParam {String} sender._id Sender's ID
 * @apiParam {String} sender.avatar Sender's avatar
 * @apiParam {String} sender.username Sender's username
 * @apiParam {String} subject Subject
 * @apiParam {Date} createdAt Date when the message information was added
 * @apiParam {Date} updatedAt Date when the message information was last updated
 */

/**
 * @apiDefine MessageNotFoundError
 * @apiError (Error 404) NotFound Couldn't find a message with the requested id
 * @apiErrorExample {json} Message Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Message not found"
 *     }
 */

/**
 * @apiDefine MessageRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing required params: content or recipient
 * @apiErrorExample {json} Message Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Content is required.",
 *          "param": "content",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Recipient is required.",
 *          "param": "recipient",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/* RATING */

/**
 * @apiDefine RatingListSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *       "_id": "5f8572d308a0ec6ab8728f8a",
 *       "author": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *        },
 *       "game": "5f8305ee5d7dce5a88142c43",
 *       "value": 5,
 *       "createdAt": "2020-10-13T09:26:43.957Z",
 *       "updatedAt": "2020-10-13T09:26:43.957Z",
 *       "__v": 0
 *     },
 *     {
 *       "_id": "5f85731508a0ec6ab8728f8b",
 *       "author": {
 *          "_id": "5f8474c497f7c853443fc988",
 *          "avatar": "2",
 *          "username": "user2"
 *        },
 *       "game": "5f8305ee5d7dce5a88142c43",
 *       "value": 4,
 *       "createdAt": "2020-10-13T09:27:49.709Z",
 *       "updatedAt": "2020-10-13T09:27:49.709Z",
 *       "__v": 0
 *     }
 *    ]
 */

/**
 * @apiDefine RatingObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "_id": "5f8572d308a0ec6ab8728f8a",
 *      "author": "5f7a43c38506ae29609f1dba",
 *      "game": "5f8305ee5d7dce5a88142c43",
 *      "value": 5,
 *      "createdAt": "2020-10-13T09:26:43.957Z",
 *      "updatedAt": "2020-10-13T09:26:43.957Z",
 *      "__v": 0
 *    }
 */

/**
 * @apiDefine CreateRatingParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *        "game": "5f8305ee5d7dce5a88142c43",
 *        "value": "5"
 *      }
 */

/**
 * @apiDefine UpdateDeleteRatingParamExample
 * @apiParamExample {json} Example Body:
 *    {
 *      "id": "5f8572d308a0ec6ab8728f8a",
 *      "author": {
 *          "_id": "5f7a43c38506ae29609f1dba",
 *          "avatar": "1",
 *          "username": "user1"
 *        },
 *      "game": "5f8305ee5d7dce5a88142c43",
 *      "value": 3,
 *      "createdAt": "2020-10-13T09:26:43.957Z",
 *      "updatedAt": "2020-10-13T09:26:43.957Z",
 *      "__v": 0
 *    }
 */

/**
 * @apiDefine RatingObjectSuccesParamsExample
 * @apiSuccess {String} _id The Rating's ID
 * @apiSuccess {String} author Author's ID
 * @apiSuccess {String} game Game's ID
 * @apiSuccess {Number} value Value
 * @apiSuccess {Date} createdAt Date when the rating information was added
 * @apiSuccess {Date} updatedAt Date when the rating information was last updated
 */

/**
 * @apiDefine CreateRatingParams
 * @apiParam {String} game Game's ID
 * @apiParam {Number} value Value
 */

/**
 * @apiDefine UpdateDeleteRatingParams
 * @apiParam {String} id The Rating's ID
 * @apiParam {Object} author Author's object
 * @apiParam {String} author._id Author's ID
 * @apiParam {String} author.avatar Author's avatar
 * @apiParam {String} author.username Author's username
 * @apiParam {String} game Game's ID
 * @apiParam {Number} value Value
 * @apiParam {Date} createdAt Date when the rating information was added
 * @apiParam {Date} updatedAt Date when the rating information was last updated
 */

/**
 * @apiDefine RatingNotFoundError
 * @apiError (Error 404) NotFound Couldn't find a rating with the requested id
 * @apiErrorExample {json} Rating Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Rating not found"
 *     }
 */

/**
 * @apiDefine RatingRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing required params: game or value
 * @apiErrorExample {json} Rating Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Game is required.",
 *          "param": "game",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Value is required.",
 *          "param": "value",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/* USER */

/**
 * @apiDefine UserListSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *      "role": "super-admin",
 *      "_id": "5f7a43c38506ae29609f1dba",
 *      "username": "user1",
 *      "email": "user1@mail.com",
 *      "createdAt": "2020-10-04T21:50:59.251Z",
 *      "updatedAt": "2020-10-04T21:50:59.251Z",
 *      "__v": 0
 *     },
 *     {
 *      "role": "user",
 *      "_id": "5f8474c497f7c853443fc988",
 *      "username": "user2",
 *      "email": "user2@mail.com",
 *      "createdAt": "2020-10-12T15:22:44.539Z",
 *      "updatedAt": "2020-10-12T15:22:44.539Z",
 *      "__v": 0
 *     }
 *    ]
 */

/**
 * @apiDefine UserObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "role": "super-admin",
 *      "_id": "5f7a43c38506ae29609f1dba",
 *      "username": "user1",
 *      "email": "user1@mail.com",
 *      "createdAt": "2020-10-04T21:50:59.251Z",
 *      "updatedAt": "2020-10-04T21:50:59.251Z",
 *      "__v": 0
 *    }
 */

/**
 * @apiDefine UserTokenObjectSuccessExample
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *    }
 */

/**
 * @apiDefine CreateUserParamExample
 * @apiParamExample {json} Example Body:
 *      {
 *       "username": "user1",
 *       "email": "user1@mail.com",
 *       "password": "123456"
 *      }
 */

/**
 * @apiDefine UpdateDeleteUserParamExample
 * @apiParamExample {json} Example Body:
 *    {
 *      "role": "super-admin",
 *      "id": "5f7a43c38506ae29609f1dba",
 *      "username": "user1",
 *      "email": "user1@mail.com",
 *      "createdAt": "2020-10-04T21:50:59.251Z",
 *      "updatedAt": "2020-10-04T21:50:59.251Z",
 *      "__v": 0
 *    }
 */

/**
 * @apiDefine UserObjectSuccesParamsExample
 * @apiSuccess {String} _id The User's ID
 * @apiSuccess {String} role User's Role
 * @apiSuccess {String} username Username
 * @apiSuccess {String} email Email
 * @apiSuccess {Date} createdAt Date when the user information was added
 * @apiSuccess {Date} updatedAt Date when the user information was last updated
 */

/**
 * @apiDefine UserTokenObjectSuccesParamsExample
 * @apiSuccess {String} token The User's Authentication Token
 */

/**
 * @apiDefine CreateUserParams
 * @apiParam {String} username Username
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 */

/**
 * @apiDefine UpdateDeleteUserParams
 * @apiParam {String} id The User's ID
 * @apiParam {String} role User's Role
 * @apiParam {String} username Username
 * @apiParam {String} email Email
 * @apiParam {Date} createdAt Date when the user information was added
 * @apiParam {Date} updatedAt Date when the user information was last updated
 */

/**
 * @apiDefine UserNotAuthorizedError
 * @apiError (Error 401) Unauthorized The user is not authorized to perform the operation
 * @apiErrorExample {json} User Not Authorized Error Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "Not authorized"
 *     }
 */

/**
 * @apiDefine InvalidCredentialsError
 * @apiError (Error 401) Unauthorized Invalid credentials
 * @apiErrorExample {json} Invalid Credentials Error Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "Inavlid credentials"
 *     }
 */

/**
 * @apiDefine NoSufficiantRightsError
 * @apiError (Error 403) Forbidden The user has no sufficiant rights to perform the operation
 * @apiErrorExample {json} No Sufficiant Rights Error Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "message": "No sufficiant rights"
 *     }
 */

/**
 * @apiDefine UserNotFoundError
 * @apiError (Error 404) NotFound Couldn't find an user with the requested id
 * @apiErrorExample {json} User Not Found Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "User not found"
 *     }
 */

/**
 * @apiDefine CreateUserRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing or invalid required params: username, email or password
 * @apiErrorExample {json} Create User Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "msg": "The username must be between 3 and 20 characters",
 *          "param": "username",
 *          "location": "body"
 *         },
 *         {
 *          "msg": "Please include a valid email",
 *          "param": "email",
 *          "location": "body"
 *         },
 *         {
 *          "msg":  "Please enter a password with 6 or more characters",
 *          "param": "password",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/**
 * @apiDefine LoginUserRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing or invalid required params: email or password
 * @apiErrorExample {json} Login User Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Please include a valid email",
 *          "param": "email",
 *          "location": "body"
 *         },
 *         {
 *          "msg":  "Please enter a password",
 *          "param": "password",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/**
 * @apiDefine UpdateUserRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing or invalid required params: username or email
 * @apiErrorExample {json} Update User Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Please include a valid email",
 *          "param": "email",
 *          "location": "body"
 *         },
 *         {
 *          "msg":  "Please enter a username",
 *          "param": "username",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/**
 * @apiDefine SetAdminRightsRequiredFieldsError
 * @apiError (Error 400) BadRequest Missing or invalid required params: role
 * @apiErrorExample {json} Set Admin Rights Required Fields Error Response:
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "errors": [
 *         {
 *          "msg": "Please enter a role",
 *          "param": "role",
 *          "location": "body"
 *         }
 *     ]
 *   }
 */

/**
 * @apiDefine EmailTakenError
 * @apiError (Error 409) Conflict There is already an account with this email
 * @apiErrorExample {json} User Already Exists Error Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "There is already an account with this email"
 *     }
 */

/**
 * @apiDefine UsernameTakenError
 * @apiError (Error 409) Conflict Username is taken
 * @apiErrorExample {json} Username Taken Error Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "This username is taken"
 *     }
 */
