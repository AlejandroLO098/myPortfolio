import "./Form.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehwp97z",
        "template_k1o8see",
        form.current,
        "CRZnBiEu-jeYAdTih"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Success");
        },
        (error) => {
          console.log(error.text);
          console.log(error);
        }
      );
  };
  return (
    <section classname="contact" id="contact">
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form__input">
          <input required type="text" placeholder="Name" name="user_name" />
        </div>
        <div className="form__input">
          <input required type="email" placeholder="Email" name="user_email" />
        </div>

        <div className="form__input">
          <textarea required placeholder="Message Me" name="message"></textarea>
        </div>

        <button className="submit__btn" type="submit" value="send">
          Submit
        </button>
      </form>
    </section>
  );
};
