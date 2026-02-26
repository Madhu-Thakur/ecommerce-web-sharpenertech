import React, { useRef } from "react";

const FIREBASE_URL = "https://movieshub-12eab-default-rtdb.firebaseio.com/contacts.json";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const response = await fetch(FIREBASE_URL, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      alert("Data submitted successfully!");

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Contact Us</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label><br />
          <input type="text" ref={nameRef} required />
        </div>

        <div>
          <label>Email</label><br />
          <input type="email" ref={emailRef} required />
        </div>

        <div>
          <label>Phone Number</label><br />
          <input type="number" ref={phoneRef} required />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;