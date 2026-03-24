import { useState } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Line } from '../../components/common/AppearingLines';
import useScrollReveal from '../../hooks/useScrollReveal';

import SearchBar from './components/SearchBar';
import { FAQCategory } from './components/FAQCategory';
import { FAQ_CATEGORIES } from './const';
import styles from './styles.module.css';

const { Title } = Typography;

export default function FAQPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  useScrollReveal();

  const filteredData = FAQ_CATEGORIES.map(cat => {
    const questionIndexes = Array.from({ length: cat.questionCount }, (_, i) => i + 1);
    const matchedQuestions = questionIndexes.filter(num => {
      const q = t(`faqPage.sections.${cat.id}.q${num}`).toLowerCase();
      const a = t(`faqPage.sections.${cat.id}.a${num}`).toLowerCase();
      return q.includes(searchQuery.toLowerCase()) || a.includes(searchQuery.toLowerCase());
    });

    return { ...cat, questions: matchedQuestions };
  }).filter(cat => cat.questions.length > 0);

  return (
    <div className={styles.faqContainer}>
      <Line className={styles.line} />

      <header className={`${styles.faqHeader} scrollReveal`}>
        <Title level={2} className={styles.faqTitle}>
          {t('faqPage.header')}
        </Title>

        <SearchBar onSearch={setSearchQuery} />
      </header>

      <main className={styles.faqContent}>
        {filteredData.length > 0 ? (
          <div className={styles.categoryGrid}>
            {filteredData.map(cat => (
              <div key={cat.id} className="scrollReveal">
                <FAQCategory category={cat} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>{t('faqPage.noResults')}</div>
        )}
      </main>

      <Line className={styles.line} style={{ marginTop: '80px' }} />
    </div>
  );
}
