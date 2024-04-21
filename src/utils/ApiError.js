class ApiError extends Error {
    constructor(
        statusCode,
        messge = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(messge)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }


    }
}

export {ApiError}