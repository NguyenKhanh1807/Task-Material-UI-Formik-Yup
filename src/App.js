import './App.css';
import ContactInfo from './components/ContactInfo';
import Employment from './components/Employment';
import Demographics from './components/Demographics';
import RelatedPerson from './components/RelatedPerson';
import Title from './components/Title';
import Guarantor from './components/Guarantor';
import Coverage from './components/Coverage';
import * as React from 'react';
import ContactForm from './components/ContactForm'; // Đảm bảo đúng đường dẫn

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
        <ContactForm /> {/* Đảm bảo sử dụng đúng tên component */}
      </div>
    </>
  );
};

export default App;
