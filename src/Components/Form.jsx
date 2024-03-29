import { useState } from 'react';
import ContactImg from '../assets/Google_Contacts_icon.png';
import axios from 'axios';

export default function Form() {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation
  const validate = (values, fieldName) => {
    const errors = {};
    const regexN = /^[a-zA-Z ]{3,30}$/;
    const regexE =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexP = /^[0-9]{10}$/;

    if (fieldName !== "Message" && (!values.Name || !regexN.test(values.Name))) {
      errors.Name = 'Invalid Name';
    }

    if (fieldName !== "Message" && (!values.Email || !regexE.test(values.Email))) {
      errors.Email = 'Invalid Email';
    }

    if (fieldName !== "Message" && (!values.Phone || !regexP.test(values.Phone))) {
      errors.Phone = 'Invalid Phone number';
    }

    if (fieldName === "Message" && values.Message.length > 60) {
      errors.Message = 'Message length exceeds 60 characters';
    }

    return errors;
  };

  // Event handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };

    axios
      .post('https://sheet.best/api/sheets/fbe5c410-f7bb-4d38-b6c7-df15429d71c3', data)
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFormErrors({});
        setIsSubmitDisabled(true);
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  };

  // Update submit button status based on form validity
  const updateSubmitButtonStatus = (fieldName) => {
    const errors = validate({ Name: name, Email: email, Phone: phone, Message: message }, fieldName);
    setFormErrors(errors);
    setIsSubmitDisabled(Object.keys(errors).length > 0);
  };

  return (
    <form className="card " onSubmit={handleSubmit}>
      <img className="card-img " src={ContactImg} alt="Logo" />
      <div className="form-group">
        <div>
          <label className="form-name">Name:</label>
          <input
            type="text"
            id="field"
            placeholder="Enter your full name"
            onChange={(e) => {
              setName(e.target.value);
              updateSubmitButtonStatus("Name");
            }}
            value={name}
          />
          <p className="error">{formErrors.Name}</p>
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="field"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
              updateSubmitButtonStatus("Email");
            }}
            value={email}
          />
          <p className="error">{formErrors.Email}</p>
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            id="field"
            placeholder="Enter phone number"
            onChange={(e) => {
              setPhone(e.target.value);
              updateSubmitButtonStatus("Phone");
            }}
            value={phone}
          />
          <p className="error">{formErrors.Phone}</p>
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <input
            type="text"
            id="field"
            placeholder="Your message"
            onChange={(e) => {
              setMessage(e.target.value);
              updateSubmitButtonStatus("Message");
            }}
            value={message}
          />
          <p className="error">{formErrors.Message}</p>
        </div>

        <button type="submit" className="form-button" disabled={isSubmitDisabled}>
          Submit
        </button>
        {isSubmitted && <p>Your response was recorded.</p>}
      </div>
    </form>
  );
}
