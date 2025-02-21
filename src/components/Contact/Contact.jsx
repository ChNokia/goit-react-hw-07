import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

import ContactData from '../ContactData/ContactData';

import styles from './Contact.module.css';

const Contact = ({ name, phone, handleDelete }) => {
  return (
    <li className={styles.card}>
      <div className={styles.dataDiv}>
        <ContactData text={name} icon={<HiUser size="24" />} />
        <ContactData text={phone} icon={<HiPhone size="24" />} />
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
