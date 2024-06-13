const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, category, merchant, date, notes } = req.body;
    const userId = req.user.userId; // Get the user ID from the decoded JWT token

    const expense = new Expense({ userId, amount, category, merchant, date, notes });
    await expense.save();

    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const userId = req.user.userId; // Get the user ID from the decoded JWT token
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
