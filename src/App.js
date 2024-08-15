import './App.css';
import Demographics from './components/Demographics';
import Title from './components/Title';
import ContactInfo from './components/ContactInfo';
import Employment from './components/Employment';
import RelatedPerson from './components/RelatedPerson';
import Guarantor from './components/Guarantor';
import Coverage from './components/Coverage';
import ContactForm from './components/ContactForm/ContactForm'; // Ensure the path is correct
import * as React from 'react';

function App() {
  return (
    <>
      <div>
        <Title />
      </div>
      
      <div>
        <Demographics/>
        <ContactInfo/>
        <Employment/>
        <RelatedPerson />
        <Guarantor />
        <Coverage />
      </div>

      <div>
        {/* This is where ContactForm is used, including its internal FormActions */}
        <ContactForm /> 
      </div>
    </>
  );
};

export default App;
