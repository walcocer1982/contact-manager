import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactCards from './components/ContactCards';
import ContactDetail from './components/ContactDetail';
import Header from './components/Header';
import contacts from './data/contacts';
import './ContactList.css';

const App = () => {
  const [isCardView, setIsCardView] = useState(false);
  const [highlightedContact, setHighlightedContact] = useState(null);

  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  const handleContactClick = (contact) => {
    setHighlightedContact(contact);
  };

  return (
    <div>
      <Header />
      <button onClick={toggleView}>
        {isCardView ? 'Switch to List View' : 'Switch to Card View'}
      </button>
      {isCardView ? (
        <ContactCards contacts={contacts} onContactClick={handleContactClick} />
      ) : (
        <ContactList contacts={contacts} onContactClick={handleContactClick} />
      )}
      {highlightedContact && <ContactDetail contact={highlightedContact} />}
    </div>
  );
};

export default App;