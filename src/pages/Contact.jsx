import Button from "../components/Button";
export default function Contact() {
  return (
    <>
      <form className="form">
        <h2 className="form-title">CONTACT</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              tabIndex={1}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              tabIndex={2}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              tabIndex={3}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input
              tabIndex={4}
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            tabIndex={5}
            name="message"
            id="message"
            placeholder="Enter your message"
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-button">
          <Button tabIndex={6} className="form-button">Contact</Button>
        </div>
      </form>
    </>
  );
}
