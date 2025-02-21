import styles from './ContactData.module.css';

const ContactData = ({ icon, text }) => {
  return (
    <div className={styles.data}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ContactData;
