import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { ContactPage, ContactText } from '../styledComponents/Contact';
import PhoneIcon from '../assets/phone-icon.svg';
import EmailIcon from '../assets/email-icon.svg';
import Beach from '../assets/beach.svg';
import palmTreeBack from '../assets/palm-tree-back.svg';
import palmTreeFront from '../assets/palm-tree-front.svg';

function Contact() {
  return (
    <ContactPage>
      <img className="palm-tree-front" src={palmTreeFront} />
      <img className="palm-tree-back" src={palmTreeBack} />
      <ContactForm />
      <ContactText>
        <h2>Nous Contacter</h2>
        <p>
          Vivamus tempus magna non purus gravida, ac bibendum diam pretium.
          Donec gravida lobortis risus vel tincidunt. In dapibus elementum mi
          sit amet dignissim. Donec tempus arcu sit amet sem ultricies, eget
          varius lectus interdum. Sed dapibus et enim iaculis vestibulum.
          Suspendisse enim lacus, semper in ante id, pellentesque viverra mi.
          Aliquam erat volutpat.
        </p>
        <div className="contact-icon-row">
          <img src={EmailIcon} />
          <span>chocolela@gmail.re</span>
          <img src={PhoneIcon} />
          <span>06.92.42.40.40</span>
        </div>
      </ContactText>
      <img className="beach-image" src={Beach} />
    </ContactPage>
  );
}

export default Contact;
