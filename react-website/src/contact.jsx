import './css/contact.css';

export default function Contact() {
  return (
    <div className="main-container-contact">
      <form className="contact-form">
        <div className="contact-row">
          <div className="contact-field">
            <label htmlFor="firstName">First Name <span style={{color: 'red'}}>*</span></label><br />
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="contact-field">
            <label htmlFor="lastName">Last Name <span style={{color: 'red'}}>*</span></label><br />
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="contact-field">
          <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label><br />
          <input type="email" id="email" name="email" required />
        </div>
        <div className="contact-field">
          <label htmlFor="subject">Subject</label><br />
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="contact-field">
          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}