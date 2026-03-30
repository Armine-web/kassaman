import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAppDispatch } from '../../../../store/hook';
import { setUser } from '../../../../store/slices/accountSlice';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import RegisterForm from '../registerForm';

const GoogleLoginButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async codeResponse => {
      try {
        console.log('Google code:', codeResponse);

        const { data } = await axios.post('http://localhost:3001/auth/google', {
          code: codeResponse.code,
        });

        console.log('Backend response:', data);

        const userData = {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
        };

        dispatch(setUser(userData));
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    onError: errorResponse => {
      console.log('Login Failed:', errorResponse);
    },
  });

  return (
    <div className="container">
      <div className={styles.loginWrapper}>
        <div className={styles.registerWrapper}>
          <h2>{t('account.notLoggedIn')}</h2>
          <RegisterForm />
        </div>
        <div className={styles.loginWrapperInner}>
          <div>
            <p>{t('account.or')}</p>
            <h2>{t('account.loginWithGoogle')}</h2>
            <p>{t('account.loginWithGoogleDescription')}</p>
          </div>
          <button className={styles.googleLogin} onClick={() => googleLogin()}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className={styles.googleIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleLoginButton;
