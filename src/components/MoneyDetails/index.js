// Write your code here
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="moneyContainer">
      <div className="balanceContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceImage"
        />
        <div className="yourBalanceContainer">
          <p className="yourBalance">Your Balance</p>
          <p data-testid="balanceAmount" className="balance">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className=" balanceContainer incomeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balanceImage"
        />
        <div className="yourBalanceContainer">
          <p className="yourBalance">Your Income</p>
          <p data-testid="incomeAmount" className="balance">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="balanceContainer expensesContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balanceImage"
        />
        <div className="yourBalanceContainer">
          <p className="yourBalance">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
