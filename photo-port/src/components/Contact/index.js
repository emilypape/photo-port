import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' defaultValue={name} onChange={handleChange} name='name' />
        </div>
        {/* email */}
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' defaultValue={email} onChange={handleChange} />
        </div>
        {/* message text */}
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
