import { GoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from '../../../../store/hook';
import { setUser } from '../../../../store/slices/accountSlice';
import styles from './styles.module.css';

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='container'>
      <GoogleLogin
      containerProps={{ className: styles.googleLogin }}
      onSuccess={() => {
        const userData = {
          name: 'Google User',
          email: '',
          phone: '',
        };
        dispatch(setUser(userData));
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    </div>
    
  );
};

export default GoogleLoginButton;
