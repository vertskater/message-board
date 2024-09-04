const db = require("../db/querys");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};
const getMessageById = async (req, res) => {
  const id = req.query.id;
  const message = await db.getMessageById(id);
  res.render("single-message", { message: message[0] ?? {} });
};

const showForm = (req, res) => {
  res.render("form");
};

const addMessage = async (req, res) => {
  const { text, user } = req.body;
  await db.addMessage(text, user);
  res.redirect("/");
};

module.exports = { getMessages, showForm, addMessage, getMessageById };
