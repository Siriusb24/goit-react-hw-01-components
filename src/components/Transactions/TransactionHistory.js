import PropTypes from 'prop-types';
import st from '../Transactions/transaction.module.css'

export default function TransactionHistory({items}){
    return(
    <table className={st.transaction}>
    <thead className={st.head}> 
    <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
  </thead>
  <tbody>
  {items.map(({id, type, amount, currency}) => ( 
  <tr className={st.bodyTable}>
    <td className={st.value}>{type}</td>
    <td className={st.value}>{amount}</td>
    <td className={st.value}>{currency}</td>
  </tr>
    ))
    }
    </tbody>
    </table>
    );
    };

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    };

    
    

    