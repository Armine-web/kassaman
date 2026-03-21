import { Avatar, Typography, Flex, Divider, Card, Button, Tooltip } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../../store/hook';
import {
  removeSelectedItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../../../store/slices/bookingSlice';
import type { SummaryProps } from './types';
import { BOUTIQUE_ADDRESS } from '../../const';
import { getProductText } from '../../../../i18n/utils/product';
import styles from './styles.module.css';

const { Text } = Typography;

const BookingSummary = ({ items, t }: SummaryProps) => {
  const dispatch = useAppDispatch();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatPrice = (amount: number, currency: string) => {
    const currencySymbols: Record<string, string> = {
      AMD: t('currency.amd'),
      RUB: '₽',
      USD: '$',
      EUR: '€',
    };

    const symbol = currencySymbols[currency] || currency;

    if (currency === 'USD') {
      return `${symbol}${amount.toLocaleString()}`;
    }

    return `${amount.toLocaleString()} ${symbol}`;
  };
  const handleRemove = (id: string) => {
    dispatch(removeSelectedItem(id));
  };

  return (
    <Card className={styles.summaryCard} title={t('checkoutPage.yourSelection')}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={item.id} className={styles.summaryItem}>
            <Flex align="center" justify="space-between">
              <Flex align="center" gap="middle">
                <Avatar
                  shape="square"
                  src={item.images[0]}
                  size={100}
                  className={styles.productAvatar}
                />
                <div style={{ flex: 1 }}>
                  <Text strong className={styles.productName}>
                    {getProductText(item.nameKey, 'name')}
                  </Text>
                  <br />
                  <Text type="secondary">{formatPrice(item.price, item.currency)}</Text>
                </div>
              </Flex>
              <Flex align="center" gap="small" className={styles.actionControls}>
                <div className={styles.quantityMiniGroup}>
                  <Button
                    type="text"
                    size="small"
                    icon={<MinusOutlined style={{ fontSize: '10px' }} />}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  />
                  <Text className={styles.quantityText}>{item.quantity}</Text>
                  <Button
                    type="text"
                    size="small"
                    icon={<PlusOutlined style={{ fontSize: '10px' }} />}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  />
                </div>

                <Divider vertical style={{ height: '20px', margin: '0 8px' }} />

                <Tooltip title={t('actions.remove')}>
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemove(item.id)}
                    className={styles.deleteButtonSmall}
                  />
                </Tooltip>
              </Flex>{' '}
            </Flex>

            {index < items.length - 1 && <Divider className={styles.itemDivider} />}
          </div>
        ))
      ) : (
        <div style={{ padding: '20px 0', textAlign: 'center' }}>
          <Text type="secondary">{t('booking.noItemsSelected')}</Text>
        </div>
      )}

      <div className={styles.totalSection}>
        <Divider className={styles.goldDivider} />
        <Flex justify="space-between" align="center">
          <Text strong className={styles.totalLabel}>
            {t('checkoutPage.total')}
          </Text>
          <Text className={styles.totalPrice}>
            {formatPrice(totalPrice, items[0]?.currency || 'AMD')}
          </Text>
        </Flex>
      </div>

      <div className={styles.boutiqueBox}>
        <Text type="secondary" className={styles.labelSmall}>
          {t('checkoutPage.boutiqueLocation')}
        </Text>
        <p className={styles.addressText}>{BOUTIQUE_ADDRESS}</p>
      </div>
    </Card>
  );
};

export default BookingSummary;
