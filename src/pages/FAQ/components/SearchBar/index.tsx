import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { SearchBarProps } from './types';
import styles from './styles.module.css';

const { Text } = Typography;

function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.searchWrapper}>
      <Text className={styles.searchLabel}>{t('faqPage.searchPlaceholder')}</Text>
      <Input
        placeholder={t('faqPage.searchAction')}
        prefix={<SearchOutlined className={styles.searchIcon} />}
        onChange={e => onSearch(e.target.value)}
        className={styles.minimalSearch}
        allowClear
      />
    </div>
  );
}

export default SearchBar;
