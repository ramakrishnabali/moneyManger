import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManger extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    transactionList: [
      {
        id: v4(),
        title: '',
        amount: '',
        type: '',
        balance: 0,
        income: 0,
        expenses: 0,
      },
    ],
  }

  getTheTitle = event => {
    this.setState({title: event.target.value})
  }

  getTheAmount = event => {
    this.setState({amount: event.target.value})
  }

  getTheType = event => {
    this.setState({type: event.target.value})
    console.log(event.target.value)
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {title, amount, type, balance, income, expenses} = this.state

    const updatedBalance =
      type === 'Income'
        ? balance + parseInt(amount)
        : balance - parseInt(amount)

    const updatedIncome = type === 'Income' ? income + parseInt(amount) : income

    const updatedExpenses =
      type === 'Income' ? expenses : expenses + parseInt(amount)

    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
      balance: updatedBalance,
      income: updatedIncome,
      expenses: updatedExpenses,
    }
    /* console.log(type)
    console.log(title)
    console.log(updatedBalance) */

    this.setState(prevState => ({
      balance: updatedBalance,
      income: updatedIncome,
      expenses: updatedExpenses,
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    const updatedTransactionList = transactionList.filter(
      eachTransactions => eachTransactions.id !== id,
    )
    const findTransaction = transactionList.find(
      transaction => transaction.id === id,
    )
    const {amount, type} = findTransaction

    const {balance, income, expenses} = transactionList

    const updateBalance = balance - parseInt(amount)
    const updateIncome = type === 'Income' ? income - parseInt(amount) : income
    const updateExpenses =
      type === 'Income' ? expenses : expenses - parseInt(amount)

    this.setState({
      transactionList: updatedTransactionList,
      balance: updateBalance,
      income: updateIncome,
      expenses: updateExpenses,
    })
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      transactionList,
    } = this.state

    return (
      <div className="appContainer">
        <div className="nameContainer">
          <h1 className="nameHeading">Hi Richard</h1>
          <p className="description">
            Welcome back to your <span className="span">Money Manger</span>
          </p>
        </div>

        <MoneyDetails balance={balance} income={income} expenses={expenses} />

        <div className="bottomContainer">
          <form onSubmit={this.onClickAddButton} className="form">
            <h1 className="transactionHeading">Add Transactions</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              value={title}
              onChange={this.getTheTitle}
              type="text"
              placeholder="TITLE"
              id="title"
              className="inputTitle"
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              value={amount}
              onChange={this.getTheAmount}
              placeholder="AMOUNT"
              id="amount"
              className="inputTitle"
            />
            <label htmlFor="select" className="label">
              TYPE
            </label>
            <select
              value={type}
              onChange={this.getTheType}
              id="select"
              className="inputTitle"
            >
              {transactionTypeOptions.map(eachOption => (
                <option
                  className="option"
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>

          <div className="historyContainer">
            <h1 className="history">History</h1>
            <ul className="ul-Container">
              <li className="listContainer">
                <p className="li-type">Title</p>
                <p className="li-type">Amount</p>
                <p className="li-type">Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionHistory={each}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManger
