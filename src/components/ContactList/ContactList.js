import PropTypes from 'prop-types';
import { ContactList } from './ContactListStyled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
export const ContactListContainer = ({
  handleClickDeleteBtn,
  arrayOfContacts,
}) => {
  return (
    <ContactList>
      {arrayOfContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          handleClickDeleteBtn={handleClickDeleteBtn}
          contact={contact}
        ></ContactListItem>
      ))}
    </ContactList>
  );
};

ContactListContainer.propTypes = {
  handleClickDeleteBtn: PropTypes.func.isRequired,
  arrayOfContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
