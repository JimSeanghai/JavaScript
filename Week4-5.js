const expenses = [120, 75, 300, 50];
let total = 0;
expenses.forEach(expense => {
  console.log(`Expense recorded: $ ${expense}`);
  total += expense;
});
console.log(`Total expenses: $${total}`);
