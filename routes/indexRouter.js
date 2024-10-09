const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});
router.get("/view/:index", (req, res) => {
  const message = messages[req.params.index];
  if (message) {
    res.render("message", {
      author: message.user,
      text: message.text,
      added: message.added,
      index: req.params.index,
    });
  } else {
    res.status(404).send("Message not found");
  }
});
router.post("/new", (req, res) => {
  const user = req.body.name;
  const text = req.body.message;
  const added = new Date();

  if (user && text) {
    messages.push({ text, user, added });
    res.redirect("/");
  } else {
    res.status(400).send("Please provide both a name and a message");
  }
});

module.exports = router;
