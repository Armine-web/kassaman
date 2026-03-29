import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { FAQCategoryProps } from './types';
import styles from './styles.module.css';

const { Text } = Typography;

export function FAQCategory({ category }: FAQCategoryProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.categoryCard} onClick={() => navigate(`/faq/${category.id}`)}>
      <div className={styles.cardContent}>
        <span className={styles.categoryIcon}>{category.icon}</span>

        <div className={styles.labelWrapper}>
          <Text className={styles.categoryLabel}>{t(`faqPage.sections.${category.id}.title`)}</Text>
          <div className={styles.textUnderline} />
        </div>
      </div>
    </div>
  );
}
