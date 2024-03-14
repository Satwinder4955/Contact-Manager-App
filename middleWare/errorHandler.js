const {constants} = require('../constants')


const errorHandler = (err, req, res, next) => {
//   console.log(err);
const statusCode = res.statusCode ? res.statusCode : 500; 

switch(statusCode){
    case constants.VALIDATION: res.json({title:"Validation",message: err.message, stackTrace: err.stack});
    break;
    case constants.NOT_FOUND : res.json({title:"Not Found",message: err.message, stackTrace: err.stack});
    break;
    case constants.UNAUTHORIZED: res.json({title:"Unauthorized",message: err.message, stackTrace: err.stack});
    break;
    case constants.SERVER_ERROR : res.json({title:"Sever Error",message: err.message, stackTrace: err.stack});
    break;
    case constants.FORBIDDEN : res.json({title:"Forbidden",message: err.message, stackTrace: err.stack});
default:
    console.log('No Error All Good!')
    break;

}


}
module.exports = errorHandler;