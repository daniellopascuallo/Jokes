const StudentController = require('../controllers/controller.jokes');

module.exports = app => {
    app.get("/api/jokes", StudentController.index);
    app.get("/api/jokes/:id", StudentController.show);
    // app.get("/api/jokes/random", StudentController.showRandom);
    app.post("/api/jokes/new", StudentController.create);
    app.put("/api/jokes/update/:id", StudentController.update);
    app.delete("/api/jokes/delete/:id", StudentController.destroy)
}
