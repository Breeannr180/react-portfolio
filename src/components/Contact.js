import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, you can show a success message to the user
      } else {
        console.log('Failed to send email');
        // Optionally, you can show an error message to the user
      }

      // Clear input fields after submission
      this.setState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, you can show an error message to the user
    }
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <div className="contact-container"></div>
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>Email me directly using breeannbond@gmail.com</p>
      </div>
    );
  }
}

export default Contact;
