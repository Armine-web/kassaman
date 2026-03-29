import { useParams, useNavigate } from 'react-router-dom';
import { Collapse, Typography, Button } from 'antd';
import { ArrowLeftOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { FAQ_CATEGORIES } from '../../const';
import { Line } from '../../../../components/common/AppearingLines';
import styles from './styles.module.css';

const { Title, Paragraph } = Typography;

function FAQCategoryDetails() {
  const { categoryId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const category = FAQ_CATEGORIES.find(c => c.id === categoryId);

  if (!category) {
    return <div className={styles.error}>{t('faqPage.notFound')}</div>;
  }

  const questions = Array.from({ length: category.questionCount }, (_, i) => i + 1);

  const accordionItems = questions.map(num => ({
    key: num.toString(),
    label: <span className={styles.qText}>{t(`faqPage.sections.${category.id}.q${num}`)}</span>,
    children: (
      <Paragraph className={styles.aText}>{t(`faqPage.sections.${category.id}.a${num}`)}</Paragraph>
    ),
    className: styles.qPanel,
  }));

  return (
    <div className={styles.detailContainer}>
      <Line className={styles.line} />

      <header className={styles.detailHeader}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/faq')}
          className={styles.backButton}
        >
          {t('faqPage.back')}
        </Button>

        <div className={styles.titleWrapper}>
          <span className={styles.headerIcon}>{category.icon}</span>
          <Title level={2} className={styles.categoryTitle}>
            {t(`faqPage.sections.${category.id}.title`)}
          </Title>
        </div>
      </header>

      <main className={styles.accordionWrapper}>
        <Collapse
          accordion
          ghost
          expandIconPlacement="end"
          items={accordionItems}
          expandIcon={({ isActive }) =>
            isActive ? (
              <MinusOutlined className={styles.toggleIcon} />
            ) : (
              <PlusOutlined className={styles.toggleIcon} />
            )
          }
          className={styles.customCollapse}
        />
      </main>

      <Line className={styles.line} style={{ marginTop: '100px' }} />
    </div>
  );
}

export default FAQCategoryDetails;
