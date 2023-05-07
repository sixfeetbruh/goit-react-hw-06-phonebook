import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookComponent/Form/Form';
import { ContactList } from './PhonebookComponent/ContactList/ContactList';
import { Filter } from './PhonebookComponent/Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.value);

  return (
    <>
      <Section title="Add new contacts">
        <PhonebookForm />
      </Section>

      <Section title="Filter contacts">
        <Filter />
      </Section>

      <Section title="Contact List">
        {contacts.length ? (
          <ContactList />
        ) : (
          <h2 style={{ textAlign: 'center' }}>There is no added contacts</h2>
        )}
      </Section>
    </>
  );
};