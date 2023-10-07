const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const changeSubscription = require('./changeSubscription');
const updateAvatar = require('./updateAvatar');

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  changeSubscription,
  updateAvatar,
};
