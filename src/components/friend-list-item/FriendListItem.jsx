import styles from './friendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <span className={styles.active}>Online</span>
      ) : (
        <span className={styles.notActive}>Offline</span>
      )}
    </div>
  )
}

export default FriendListItem
