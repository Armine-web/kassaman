import { useState } from 'react';
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SORT_OPTIONS } from '../../const';
import type { SortOption, SortBarProps } from './types';
import styles from './styles.module.css';

const { Text } = Typography;

export function SortBar({ onSortChange }: SortBarProps) {
  const { t } = useTranslation();
  const [selectedSort, setSelectedSort] = useState<SortOption>('newest');

  const handleSortChange = (value: SortOption) => {
    setSelectedSort(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  const getSelectedLabel = () => {
    const option = SORT_OPTIONS.find(opt => opt.value === selectedSort);
    return option ? t(option.label) : t('sortOptions.newest');
  };

  const items = SORT_OPTIONS.map(option => ({
    key: option.value,
    label: (
      <div
        className={`${styles.sortItem} ${selectedSort === option.value ? styles.sortItemSelected : ''}`}
        onClick={() => handleSortChange(option.value as SortOption)}
      >
        {t(option.label)}
      </div>
    ),
  }));

  return (
    <div className={styles.sortBar}>
      <Text className={styles.sortLabel}>{t('common.sortBy')}</Text>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        placement="bottomLeft"
        rootClassName={styles.sortDropdown}
      >
        <Space className={styles.sortTrigger}>
          <span className={styles.sortValue}>{getSelectedLabel()}</span>
          <DownOutlined className={styles.sortIcon} />
        </Space>
      </Dropdown>
    </div>
  );
}
