const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    
    }
}

function test (){
    console.log("Hello")
}

export  {asyncHandler, test} 