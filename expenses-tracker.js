const account = {
  name: 'Natacha',
  expenses: [{
    description: 'Fuel',
    amount: 11
  }],
  incomes: [{
    description: 'Salary',
    amount: 1110
  }],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.incomes.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function() {
    let totalExpense = 0
    let totalIncome = 0
    this.expenses.forEach(function (expense) {
      totalExpense = totalExpense + expense.amount
    })
    this.incomes.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })
    let balance = totalIncome - totalExpense
    return `${this.name} has ${balance} with income ${totalIncome} and expense ${totalExpense}`
  }
}

account.addExpense('Rent', 1000)
account.addExpense('Coffee', 2)
account.addIncome('End of year bonus', 1000)
console.log(account.getAccountSummary())