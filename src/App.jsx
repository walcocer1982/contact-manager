import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import Header from './components/Header';
import contacts from './data/contacts.json';
import './ContactList.css';

const App = () => {
  const [highlightedContact, setHighlightedContact] = useState(null);

  const handleClearContact = () => {
    setHighlightedContact(null);
  };

  return (
    <div>
      <Header />
      <ContactList contacts={contacts} onSelectContact={setHighlightedContact} />
      {highlightedContact && (
        <ContactPinned contact={highlightedContact} onClearContact={handleClearContact} />
      )}
    </div>
  );
};

export default App;