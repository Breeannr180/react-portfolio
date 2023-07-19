import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          name: "contact"
        }
      ],
      currentPage: null,
      formState: {
        name: '',
        email: '',
        message: '',
      },
      errorMessage: '',
    };
  }

  componentDidMount() {
    const { pages } = this.state;
    this.setState({ currentPage: pages[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formState, errorMessage } = this.state;
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  handleChange = (e) => {
    const { formState } = this.state;
    if (e.target.name === 'email') {
      const isValid = this.validateEmail(e.target.value);
      if (!isValid) {
        this.setState({ errorMessage: 'Your email is invalid.' });
      } else {
        this.setState({ errorMessage: '' });
      }
    } else {
      if (!e.target.value.length) {
        this.setState({ errorMessage: `${e.target.name} is required.` });
      } else {
        this.setState({ errorMessage: '' });
      }
    }
    const updatedFormState = { ...formState, [e.target.name]: e.target.value };
    this.setState({ formState: updatedFormState }, () => {
      console.log('Handle Form', this.state.formState);
    });
  };

  validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    const { currentPage, formState, errorMessage } = this.state;
    const { name, email, message } = formState;

    return (
      <section style={{ backgroundColor: 'dark' }}>
        <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px', color: 'white' }}>
          <h1 style={{ textAlign: 'center' }}>{this.capitalizeFirstLetter(currentPage?.name)}</h1>
          <hr style={{ backgroundColor: 'light', height: '1px', border: 'none' }} />
          <form id="contact-form" onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name">Name:</label>
              <input
                style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid lightgray' }}
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onBlur={this.handleChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email address:</label>
              <input
                style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid lightgray' }}
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onBlur={this.handleChange}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="message">Message:</label>
              <textarea
                style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid lightgray' }}
                placeholder="Message"
                name="message"
                rows="5"
                value={message}
                onBlur={this.handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p style={{ color: 'red' }}>{errorMessage}</p>
              </div>
            )}
            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
                Submit
              </button>
            </div>
          </form>
          <h4>
            BreeAnn Bond <br />
            Or simply send me an email at: <a href="mailto:breeannbond@gmail.com" style={{ color: 'white' }}>breeannbond@gmail.com</a>
          </h4>
        </div>
      </section>
    );
  }
}

export default Contact;
