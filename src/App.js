import './App.css';
import ContactInfoSection from './components/ContactInfoSection';
import CoverageSection from './components/CoverageSection';
import DemographicsSection from './components/DemographicsSection';
// import ContactInfo from './components/ContactInfo';
// import Demographics from './components/Demographics';
import EmploymentSection from './components/EmploymentSection';
import GuarantorSection from './components/GuarantorSection';
import RelatedPersonSection from './components/RelatedPersonSection';
import Title from './components/Title';
// import Employment from './components/Employment';
// import RelatedPerson from './components/RelatedPerson';
// import Guarantor from './components/Guarantor';
// import Coverage from './components/Coverage';
import ContactForm from './components/ContactForm/ContactForm' // Ensure the path is correct
import * as React from 'react';

function App() {
  return (
    <>
      <div>
        <Title />
      </div>
      
      <div>
        <DemographicsSection/>
        <ContactInfoSection />
        <EmploymentSection />
        <GuarantorSection />
        <RelatedPersonSection />
        <CoverageSection />
      </div>

      <div>
        <ContactForm />
      </div>
    </>
  );
};

export default App;
