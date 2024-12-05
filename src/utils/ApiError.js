class ApiError extends Error {
    constructor(
        statckCode,
        message= "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statckCode = statckCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}