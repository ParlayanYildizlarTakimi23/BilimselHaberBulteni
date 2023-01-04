import React from 'react'
import Contact3 from '../assets/contact3.png'
import '../styles/Contact.css'

function Contact() {
    return (
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${Contact3})` }}
        ></div>
        <div className="rightSide">
          <h1> Bizimle iletisime gecin</h1>
  
          <form id="contact-form" method="POST">
            <label htmlFor="name">Adiniz </label>
            <input name="name" placeholder="Adinizi giriniz..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Mail..." type="email" />
            <label htmlFor="message">Mesaj</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Gonder</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
