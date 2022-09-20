/* 
exports.success = (message, results, statusCode) => {
    return {
        message,
        error: false,
        code: statusCode,
        results
    };
};

exports.error = (message, statusCode) => {

    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    const findCode = codes.find((code) => code == statusCode);

    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return {
        message,
        code: statusCode,
        error: true
    };
};


exports.validation = (errors) => {
    return {
        message: "Validation errors",
        error: true,
        code: 422,
        errors
    };
}; */

export const FormatError = (msg, status) => {
    return {
        type: "error",
        msg: msg,
        ErrorCode: status
    }
}//FormatError

export const FormatSuccess = (msg, obj = null) => {
    if (obj) {
        return {
            type: "success",
            msg: msg,
            data: obj
        }
    } else {
        return {
            type: "success",
            msg: msg
        }
    }
}//FormatSucces