import { Formik, Form, Field } from 'formik';

export const Filter = ({ onSearch }) => {
  return (
    <Formik>
      <>
        <label htmlFor="filter">Find contacts by name</label>
        <Field type="text" name="filter" onChange={onSearch}></Field>
      </>
    </Formik>
  );
};
