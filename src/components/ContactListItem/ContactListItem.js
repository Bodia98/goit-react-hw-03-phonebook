import PropTypes from 'prop-types';
import { ContactItem, ContactText, RemoveBtn } from './ContactListItemStyled';
export const ContactListItem = ({ contact, handleClickDeleteBtn }) => {
  return (
    <ContactItem>
      <ContactText>
        {contact.name}: {contact.number}
      </ContactText>
      <RemoveBtn id={contact.id} type="button" onClick={handleClickDeleteBtn}>
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClickDeleteBtn: PropTypes.func.isRequired,
};
