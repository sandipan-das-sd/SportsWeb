// localVariables.js

const localVariables = (req, res, next) => {
    try {
        req.app.locals = {
            otp: null,
            resetSession: false
        };
        next();
    } catch (error) {
        console.error("Error in localVariables middleware:", error);
        next(error); // Pass error to the next middleware or error handler
    }
}

module.exports = localVariables;
