const errorMiddleHandle = (err, _req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500
    res.status(statusCode).json({
        messgae: err.messgae,
        statusCode,
        stack: err.stack,
    })
}
module.exports=errorMiddleHandle