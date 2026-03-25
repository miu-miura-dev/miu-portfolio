import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">CONTACT</h2>

      <p className="contact__text">
        お問い合わせは、下記よりご連絡ください。
      </p>

      <div className="contact__links">
        <a href="https://mail.google.com/mail/?view=cm&to=m.miura.dev@gmail.com" target="_blank">
          m.miura.dev@gmail.com
        </a>
        <a href="https://github.com/miu-miura-dev" target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;