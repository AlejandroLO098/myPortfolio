import React, { useState } from "react";
import "./Form.css";
export const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submitted!");
  };
  return (
    <section classname="contact" id="contact">
      <form className="form">
        <div className="form__input">
          <input
            type="text"
            placeholder="Name"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
        </div>
        <div className="form__input">
          <input
            type="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </div>

        <div className="form__input">
          <textarea
            placeholder="Message Me"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <button className="submit__btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
