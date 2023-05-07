import PropTypes from 'prop-types';
import { Button, Item, Text } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <Text>{name}</Text>
        <p>{number}</p>

        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          X
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
