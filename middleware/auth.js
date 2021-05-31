module.exports = {
    getUser:(req,res,next) => {
        req.user = req.session.user
        next()
    }
}