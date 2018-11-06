
const testRoutes = require("./test");

module.exports =  function (app){
	
	app.use(testRoutes.routes()).use(testRoutes.allowedMethods());
}