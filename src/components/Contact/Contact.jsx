import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    const email = form.current.user_email.value;

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {

      alert("Please enter a valid Gmail address");

      return;

    }

    emailjs.send(
      "service_sn5w6v2",
      "template_o2w3btz",
      {
        user_name: form.current.user_name.value,
        user_email: email,
        message: form.current.message.value,
      },
      "fw8oOUKNxjl0khvdy"
    )

    .then(() => {

      alert("Message Sent Successfully!");

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      alert("Failed To Send Message");

    });

  };

  return (

    <section
      className="contact"
      id="contact"
    >

      <h2>
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Gmail Address"
          pattern="[a-z0-9._%+-]+@gmail\.com$"
          title="Please enter a valid Gmail address"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;