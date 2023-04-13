const { Passages } = require("../models/passages.model");

const router = require("express").Router();

// i got this error [
//  user is not allowed to do action [insert] on [e.passages]
//  user is not allowed to do action find on [e.passages]
// ]

router.get("/", async (req, res) => {
  try {
    const data = new Passages({
      doc_id: 30,
      passage: "test",
      author: "test",
      format: "poem",
      title: "test",
      year: 1200,
    });
    const newData = await data.save();
    console.log(newData);
    //   console.log(data);
    return res.send("data");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
