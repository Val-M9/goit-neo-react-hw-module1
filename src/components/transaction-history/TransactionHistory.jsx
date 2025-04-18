import styles from './transactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.historyTable}>
      <thead>
        <tr>
          <th className={styles.headCell}>Type</th>
          <th className={styles.headCell}>Amount</th>
          <th className={styles.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.bodyCell}>{type}</td>
            <td className={styles.bodyCell}>{amount}</td>
            <td className={styles.bodyCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory
