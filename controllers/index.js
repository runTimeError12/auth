module.exports = (app) => {
    app.use("/api/auth", require('./auth/auth.route'));
    app.use("/api/util", require('./util/util.route'));

}
