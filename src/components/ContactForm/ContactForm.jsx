import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsOps';

import styles from './ContactForm.module.css';

const initialValues = {
  username: '',
  usernumber: '',
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  usernumber: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = values => {
    dispatch(
      addContact({
        name: values.username,
        number: values.usernumber,
      })
    );
  };

  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={styles.form}>
          <label className={styles.formField}>
            <span>Name</span>
            <Field className={styles.formInput} type="text" name="username" />
            <ErrorMessage
              className={styles.inputError}
              name="username"
              component="span"
            />
          </label>
          <label className={styles.formField}>
            <span>Number</span>
            <Field className={styles.formInput} name="usernumber" />
            <ErrorMessage
              className={styles.inputError}
              type="text"
              name="usernumber"
              component="span"
            />
          </label>
          <button className={styles.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
