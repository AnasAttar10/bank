const express = require("express");
// const urllib = require("urllib");
const router = express.Router();
let Transactions = require("../models/Transaction");

router.get("/transactions", (req, res) => {
  Transactions.find({}, function (err, cities) {
    if (cities === null) cities = [];
    res.send(cities);
  });
});

router.get("/categories", async (req, res) => {
  Transactions.aggregate([
    { $group: { _id: "$category", amount: { $sum: "$amount" } } },
  ])
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
  // res.send(amountOfCategories);
});

router.post("/transaction", (req, res) => {
  let newTransaction = { ...req.body };
  console.log(newTransaction);
  let t1 = new Transactions(newTransaction);
  t1.save();
  res.send(t1);
});

router.delete("/transaction/:id", (req, res) => {
  let id = req.params.id;
  Transactions.findOne({ _id: id }, function (error, transaction) {
    console.log("This transaction will get deleted !" + transaction.vendor);
    transaction.remove();
    res.send(transaction);
  });
});

module.exports = router;
