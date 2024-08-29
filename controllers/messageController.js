const { v4: uuid } = require("uuid");

const messages = [
  {
    uuid: uuid(),
    text: "Hi there!",
    user: "Andrew Lincoln",
    date: new Date().toLocaleDateString(),
  },
  {
    uuid: uuid(),
    text: "Hello World!",
    user: "Marissa Conelly",
    date: new Date().toLocaleDateString(),
  },
];

const getMessages = (req, res) => {
  res.render("index", { messages: messages });
};
const getMessageById = (req, res) => {
  const uuid = req.query.uuid;
  const message = messages.filter((msg) => msg.uuid === uuid);
  res.render("single-message", { message: message[0] ?? {} });
};

const showForm = (req, res) => {
  res.render("form");
};

const addMessage = (req, res) => {
  const { text, user } = req.body;
  messages.push({
    uuid: uuid(),
    text: text,
    user: user,
    date: new Date().toLocaleDateString(),
  });
  res.redirect("/");
};

module.exports = { getMessages, showForm, addMessage, getMessageById };
