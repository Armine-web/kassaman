import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ContactUsHero from './components/ContactUsHero';

const Contact = () => {
  return (
    <section className='contactPage'>
      <ContactBanner />
      <ContactInfo />
      <ContactUsHero />
      <ContactForm />
    </section>
  );
};

export default Contact;
