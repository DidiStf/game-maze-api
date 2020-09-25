const transformUserObject = (user) => {
  const {
    _id,
    avatar,
    dateOfBirth,
    firstName,
    lastName,
    role,
    username,
    email,
    createdAt,
    updatedAt,
  } = user;
  const transformedUser = {
    id: _id,
    avatar,
    dateOfBirth,
    firstName,
    lastName,
    role,
    username,
    email,
    createdAt,
    updatedAt,
  };
  return transformedUser;
};

module.exports = transformUserObject;
