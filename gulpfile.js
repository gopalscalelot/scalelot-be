var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require("del");

gulp.task('set-dev-node-env', function(done) {
    process.env.PROTECTED_ENDPOINTS = '/v1/meta-keywords,/v1/contact-us/all,/v1/career/all';
    done();
});
gulp.task('set-dev-node-env', function(done) {
    process.env.PORT = 3100;
    done();
});

gulp.task('set-dev-node-env', function(done) {
    process.env.CORS_URL = '*';
    done();
});
gulp.task('set-dev-node-env', function(done) {
    process.env.DB_NAME = "scalelot";
    done();
});

gulp.task('set-dev-node-env', function(done) {
    process.env.DB_CONNECTION_STRING = 'mongodb+srv://gopal_scalelot:root%40Scalelot@cluster0.xjusu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    done();
});

gulp.task('set-dev-node-env', function(done) {
    process.env.DEFAULT_USERNAME = 'admin';
    done();
});
gulp.task('set-dev-node-env', function(done) {
    process.env.DEFAULT_PASSWORD = 'admin';
    done();
});

gulp.task('set-dev-node-env', function(done) {
    process.env.GMAIL_SERVICE = "gmail";
    done();
});
gulp.task('set-dev-node-env', function(done) {
    process.env.GMAIL_AUTH_USERNAME = 'sales.scalelot@gmail.com';
    done();
});
gulp.task('set-dev-node-env', function(done) {
    process.env.GMAIL_AUTH_PASSWORD = 'SalesScalelot@22';
    done();
});

// Task which would transpile typescript to javascript
gulp.task("typescript", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// Task which would delete the old dist directory if present
gulp.task("build-clean", function () {
    return del(["./dist"]);
});

// Task which would just create a copy of the current views directory in dist directory
gulp.task("views", function () {
    return gulp.src("./views/**/*.ejs").pipe(gulp.dest("./dist/views"));
});

// Task which would just create a copy of the current static assets directory in dist directory
gulp.task("assets", function () {
    return gulp.src("./public/assets/**/*").pipe(gulp.dest("./dist/assets"));
});

// The default task which runs at start of the gulpfile.js
gulp.task("default", gulp.series("build-clean","typescript", "views", "assets", ["set-dev-node-env"]), () => {
    console.log("Done");
});

