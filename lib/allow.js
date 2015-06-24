var _ = require('lodash');

module.exports = function allowed(authRole, accessRoleLevel) {

	if (authRole === accessRoleLevel) {
		return true;
	}

	var roles = [undefined, 'guest', 'author', 'admin'];

	// get an array of all access roles that the authenticated user has access to.
	var rolesAuthUserCanAccess = _.takeWhile(roles, function(role) {
		return authRole !== role;
	});

	// if the accessLevel / allowed role is within the rolesAuthUserCanAccess, return true
	return (_.includes(rolesAuthUserCanAccess, accessRoleLevel));

};
