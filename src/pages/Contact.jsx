
export default function Contact() {




 





  return (
    <div className="contact-container">
      <h1>Contact</h1>

      <form className="contact-form">
        <div className="contact-row">
          <div className="contact-field">
            <label>Voornaam</label>
            <input type="text" />
          </div>

          <div className="contact-field">
            <label>Achternaam</label>
            <input type="text" />
          </div>
        </div>

        <div className="contact-field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="contact-field">
          <label>Bericht</label>
          <textarea></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}