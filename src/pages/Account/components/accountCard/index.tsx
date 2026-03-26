import { useState } from 'react';
import { Card, Typography, Button, Flex, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../../../store/hook';
import styles from './styles.module.css';
import { setUser } from '../../../../store/slices/accountSlice';
import { useTranslation } from 'react-i18next';
import BaseButton from '../../../../components/common/buttons/BaseButton';

const { Title, Text } = Typography;

const AccountCard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { user } = useAppSelector(state => state.account);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setValue(currentValue);
  };

  const handleSave = (field: string) => {
    if (!user) return;

    dispatch(
      setUser({
        ...user,
        [field]: value,
      }),
    );
    setEditingField(null);
  };

  return (
    <section className="">
      <Card className={styles.accountCard}>
        <Flex vertical>
          <Flex align="center" justify="space-between">
            {editingField === 'name' ? (
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onPressEnter={() => handleSave('name')}
                className={styles.changeField}
              />
            ) : (
              <Title level={4}>{user?.name}</Title>
            )}

            {editingField === 'name' ? (
              <BaseButton onClick={() => handleSave('name')}>{t('account.save')}</BaseButton>
            ) : (
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => handleEdit('name', user!.name)}
              />
            )}
          </Flex>

          <Flex align="center" justify="space-between">
            {editingField === 'email' ? (
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onPressEnter={() => handleSave('email')}
                className={styles.changeField}
              />
            ) : (
              <Text type="secondary">{user!.email}</Text>
            )}

            {editingField === 'email' ? (
              <BaseButton onClick={() => handleSave('email')}>{t('account.save')}</BaseButton>
            ) : (
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => handleEdit('email', user!.email)}
              />
            )}
          </Flex>

          <Flex align="center" justify="space-between">
            {editingField === 'phone' ? (
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onPressEnter={() => handleSave('phone')}
                className={styles.changeField}
              />
            ) : (
              <Text type="secondary">{user!.phone}</Text>
            )}

            {editingField === 'phone' ? (
              <BaseButton onClick={() => handleSave('phone')}>{t('account.save')}</BaseButton>
            ) : (
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => handleEdit('phone', user!.phone)}
              />
            )}
          </Flex>
        </Flex>
      </Card>
    </section>
  );
};

export default AccountCard;
