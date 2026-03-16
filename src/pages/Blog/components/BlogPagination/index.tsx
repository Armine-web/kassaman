import { Pagination } from 'antd';
import type { Props } from './types';
import styles from './styles.module.css';

export default function BlogPagination({ total, pageSize, current, onChange }: Props): JSX.Element {
  return (
    <div className={styles.paginationContainer}>
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        hideOnSinglePage={false}
        showSizeChanger={false}
        showLessItems={false}
        showQuickJumper={false}
        style={{ textAlign: 'center' }}
      />
    </div>
  );
}
