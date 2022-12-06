import PropTypes from 'prop-types'
import css from "./Transaction.module.css";


export const TransactionHistory = ({transactions}) =>{
    return(
        <table className={css.transaction_history}>
        <thead className={css.transaction_title}>
            <tr >
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody >
            {transactions.map(item =>{  
                return(
                    <tr key={item.id} className={css.transaction_colom} >
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                    </tr>
                )
            })}
            
        </tbody>
        </table>
    )

}

TransactionHistory.propTypes ={
    transactions:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })) 

}