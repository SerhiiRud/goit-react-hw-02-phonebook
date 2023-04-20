import { Formik } from 'formik';
import { nanoid } from 'nanoid';

export const Phonebook = ({ onAddContact }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          console.log(1);
          onAddContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <form
        //   onSubmit={e => {
        //     e.preventDefault();
        //   }}
        >
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </Formik>
    </div>
  );
};
