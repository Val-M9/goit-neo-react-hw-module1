import styles from './profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.general}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{tag}</p>
        <p className={styles.info}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.statName}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statName}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statName}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
