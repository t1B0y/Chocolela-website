import React from 'react';
import { Form } from '../styledComponents/Contact';
import cocoaIcon from '../assets/flavors/cocoa-contact.svg';

function ContactForm() {
  return (
    <Form>
      <h2>Formulaire</h2>
      <div className="underline" />
      <img className="contact-icon" src={cocoaIcon} />
      <div className="form-inputs-container">
        <div className="contact-row">
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Nom"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="e-mail"
              name="email"
              id="email_input"
              required
            />
          </div>
        </div>
        <div className="telephone">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="numero de telephone"
            name="telephone"
            id="telephone_input"
          />
        </div>
        <div className="subject">
          <label htmlFor="subject"></label>
          <input
            type="text"
            placeholder="Sujet"
            name="subject"
            id="subject_input"
          />
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder="mon message"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </div>
    </Form>
  );
}

export default ContactForm;
