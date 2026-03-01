import { Popover, Space } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { FilterModalContent } from '../FilterModalContent';
import styles from './styles.module.css';
import type { FilterModalProps } from './types';

export function FilterModal({ open, onClose, onOpen, selectedCategory }: FilterModalProps) {
  const { t } = useTranslation();

  return (
    <Popover
      content={<FilterModalContent onClose={onClose} selectedCategory={selectedCategory} />}
      trigger="click"
      open={open}
      onOpenChange={visible => (visible ? onOpen() : onClose())}
      placement="bottomRight"
      rootClassName={styles.luxuryPopover}
      styles={{ content: { padding: 0 } }}
    >
      <button className={styles.filterButton} type="button">
        <Space>
          <FilterOutlined />
          <span  className={styles.filterText}>{t('common.filter')}</span>
        </Space>
      </button>
    </Popover>
  );
}
