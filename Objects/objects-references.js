let myAccount = {
  name: "Vamsi",
  expenses: 0,
  income: 0,
};

let addExpenses = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.expense = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expense;
  return `Account for ${account.name} has ${balance} ${account.income} in expenses.`;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 2.5);
addExpenses(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
