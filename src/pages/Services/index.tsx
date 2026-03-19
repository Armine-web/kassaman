import ServiceHero from './components/ServiceHero';
import ServiceCards from './components/ServiceCard';
import ParallaxDivider from './components/ParralexDivider';
import ServiceForm from './components/ServiceForm';
import styles from './styles.module.css';

const Services = () => {
  return (
    <main className={styles.pageWrapper}>
      <ServiceHero />
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <ServiceCards />
        </div>
      </section>

      <ParallaxDivider />

      <section className={styles.formSection}>
        <div className={styles.container}>
          {' '}
          <div className={styles.splitWrapper}>
            <ServiceForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
