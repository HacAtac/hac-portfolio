import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
      //   console.log("errorMessage", errorMessage)
    }
    if (!errorMessage) {
      //spread operator ...
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  }

  return (
    <section>
      <h1 id="contact-title">Contact me</h1>
      <form id="contact-form">
        <div id="width">
          <label id="name" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={name}
          />
        </div>
        <div id="width">
          <label id="email" htmlFor="email">
            Email address:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>
        <div id="width">
          <label id="message" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-input"
            name="message"
            rows="5"
            onBlur={handleChange}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
