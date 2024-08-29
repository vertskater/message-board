const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/new", messageController.showForm);
indexRouter.post("/new", messageController.addMessage);

indexRouter.get("/single-message", messageController.getMessageById);
indexRouter.get("/about", (req, res) => {
  res.render("about");
});

module.exports = indexRouter;
