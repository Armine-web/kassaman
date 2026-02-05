import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

function User() {
  const navigate = useNavigate();

  return (
    <div className={styles.user} onClick={() => navigate('/account')}>
      <UserOutlined className={styles.userIcon} />
    </div>
  );
}

export default User;
