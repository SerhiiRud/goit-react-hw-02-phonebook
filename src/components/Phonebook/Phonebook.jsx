import { Formik, Form, Field } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { nanoid } from 'nanoid';

const userSchema = object({
  name: string().required('Required field!'),
  number: string().required('Required field!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, actions) => {
          onAddContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
