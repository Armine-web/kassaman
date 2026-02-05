import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactUsHero from './components/ContactUsHero';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactBanner />
      <ContactInfo />
      <ContactUsHero />
      <ContactForm />
    </div>
  );
};

export default Contact;
