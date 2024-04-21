import {asyncHandler,test} from "../utils/asyncHandler";


const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Ok",
    });
})

const testPrint = test;

testPrint();



export { registerUser}