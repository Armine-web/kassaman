import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

export default function Newsletter(): JSX.Element {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterInner}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={styles.successMessage}
            >
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.newsletterTitle}>{t('blogPage.newsletter_thanks')}</h3>
              <p className={styles.newsletterDesc}>{t('blogPage.newsletter_success_msg')}</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.newsletterText}>
                <div className={styles.newsletterKicker}>{t('blogPage.newsletter_kicker')}</div>
                <h2 className={styles.newsletterTitle}>{t('blogPage.newsletter_title')}</h2>
                <p className={styles.newsletterDesc}>{t('blogPage.newsletter_desc')}</p>
              </div>

              <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <input
                  className={styles.newsletterInput}
                  type="email"
                  placeholder={t('blogPage.newsletter_placeholder')}
                  required
                  disabled={status === 'loading'}
                />
                <button
                  className={styles.newsletterBtn}
                  type="submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '...' : t('blogPage.newsletter_button')}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
