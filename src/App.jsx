import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import contacts from './data/contacts.json';
import './ContactList.css';

const App = () => {
  const [highlightedContact, setHighlightedContact] = useState(null);
  const [allContacts, setAllContacts] = useState(contacts);

  const handleClearContact = () => {
    setHighlightedContact(null);
  };

  const handleAddContact = (newContact) => {
    setAllContacts(prevContacts => [...prevContacts, newContact]);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="column">
          <ContactForm onAddContact={handleAddContact} />
        </div>
        <div className="column">
          <ContactList contacts={allContacts} onSelectContact={setHighlightedContact} />
        </div>
        <div className="column">
          {highlightedContact && (
            <ContactPinned contact={highlightedContact} onClearContact={handleClearContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;