import { useDispatch, useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import { deleteContact } from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';

import styles from './ContactList.module.css';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <ul className={styles.list}>
        {visibleContacts.map(item => (
          <Contact
            key={item.id}
            name={item.name}
            phone={item.number}
            handleDelete={() => handleDeleteItem(item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
