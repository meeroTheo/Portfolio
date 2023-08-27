import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ContactFormHeader from "./ContactFormHeader";
import emailService from "../services/email";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailService.sendEmail(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contactFormContainer">
      <ContactFormHeader />
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
        </div>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
