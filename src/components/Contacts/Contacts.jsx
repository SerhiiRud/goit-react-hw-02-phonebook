export const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
};
