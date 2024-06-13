const express = require('express');
const router = express.Router();
const { addExpense, getExpenses } = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.post('/add', authMiddleware, addExpense);
router.get('/', authMiddleware, getExpenses);

module.exports = router;
