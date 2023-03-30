// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionHistory, deleteTransaction} = props

  const {id, amount, title, type} = transactionHistory

  const deleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="Container">
      <p className="li-type">{title}</p>
      <p className="li-type">{amount}</p>
      <p className="li-type">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        data-testid="delete"
        className="deleteImage"
        onClick={deleteButton}
      />
    </li>
  )
}

export default TransactionItem
