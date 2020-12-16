import React, { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const isValid = () => {
    return name && email && email.includes("@") && email.endsWith(".com");
  };

  return (
    <>
      <Form.Bg>
        <Form>
          <Form.Title>Contact</Form.Title>
          <Form.Base>
            <Form.Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Email ID"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.TextArea
              type="text"
              placeholder="Write your enquiry here ..."
              value={desc}
              onChange={({ target }) => setDesc(target.value)}
            />
            <Form.Submit disabled={!isValid()} type="submit">
              Submit
            </Form.Submit>
          </Form.Base>
        </Form>
      </Form.Bg>
      <Footer />
    </>
  );
}

export default ContactPage;
