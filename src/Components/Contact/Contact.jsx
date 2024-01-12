import './contact.scss';

function Contact() {
  return (
    <section className="section-contact">

      <div className="section-contact-container">

        <h2 className="section-contact-title">Gostaria de entrar em contato?</h2>

        <div className="section-contact-social-icons-wrapper">

          <a target="_blank" href="mailto:guimndss@hotmail.com">
            <img
              src="./src/assets/icons/mail.svg" alt="Email Icon" />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/guilherme-mendes-16a9891b8/">
            <img
              src="./src/assets/icons/linkedin.svg" alt="LinkedIn Icon" />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact