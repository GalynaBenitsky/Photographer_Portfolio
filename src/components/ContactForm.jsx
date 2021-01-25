import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/contactForm.css";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  refreshPage() {
    window.location.reload(true);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_q41tg4a",
        e.target,
        "user_yiwQKkRjTegC035bLHtzY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <>
        <div className="form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label className="formLable" htmlFor="full-name">
                Повне ім'я
              </Form.Label>
              <Form.Control
                className="form-control"
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="formLable" htmlFor="email">
                Електронна пошта
              </Form.Label>
              <Form.Control
                className="form-control"
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="formLable" htmlFor="subject">
                Тема
              </Form.Label>
              <Form.Control
                className="form-control"
                id="subject"
                name="subject"
                type="subject"
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="formLable" htmlFor="message">
                Повідомлення
              </Form.Label>
              <Form.Control
                className="form-control"
                id="message"
                name="message"
                as="textarea"
                rows="5"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="submit btn-lg"
              type="submit"
              disabled={this.state.disabled}
              onClick={this.refreshPage}
            >
              Надіслати повідомлення
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Повідомлення відправленно</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Повідомлення не відправленно</p>
            )}
          </Form>
        </div>
      </>
    );
  }
}
export default ContactForm;
