import { useState, useMemo } from 'react';
import { Checkbox, Slider, Collapse, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, METALS, STONES } from '../../const';
import type { FilterModalContentProps } from './types';
import styles from './styles.module.css';

export function FilterModalContent({ onClose, selectedCategory }: FilterModalContentProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 10000]);

  const [tempSelection, setTempSelection] = useState<string>(selectedCategory || '');

  const handleReset = () => {
    setTempSelection('');
    setPriceRange([500, 10000]);
  };

  const handleApply = () => {
    const path = tempSelection ? `/catalog?category=${tempSelection}` : '/catalog';
    console.log('Navigating to:', path);
    navigate(path);
    onClose?.();
  };
  const sliderStyles = {
    track: { background: '#c5a059' },
    handle: { borderColor: '#c5a059', background: '#ffffff' },
  };

  const accordionItems = useMemo(
    () => [
      {
        key: '1',
        label: <span className={styles.sectionTitle}>{t('common.category')}</span>,
        children: (
          <div className={styles.list}>
            {CATEGORIES.map(cat => {
              const isActive = tempSelection === cat.key;
              return (
                <div
                  key={cat.key}
                  className={`${styles.categoryRow} ${isActive ? styles.activeRow : ''}`}
                  onClick={() => setTempSelection(cat.key)}
                >
                  <Checkbox className={styles.luxuryCheckbox} checked={isActive} />
                  <span className={styles.categoryLabel}>{t(cat.label)}</span>
                </div>
              );
            })}
          </div>
        ),
      },
      {
        key: '2',
        label: <span className={styles.sectionTitle}>{t('common.material')}</span>,
        children: (
          <div className={styles.list}>
            {METALS.map(m => (
              <Checkbox key={m.key} className={styles.luxuryCheckbox}>
                {t(m.label)}
              </Checkbox>
            ))}
          </div>
        ),
      },
      {
        key: '3',
        label: <span className={styles.sectionTitle}>{t('common.stone', 'Gemstones')}</span>,
        children: (
          <div className={styles.list}>
            {STONES.map(s => (
              <Checkbox key={s.key} className={styles.luxuryCheckbox}>
                {t(s.label)}
              </Checkbox>
            ))}
          </div>
        ),
      },
      {
        key: '4',
        label: <span className={styles.sectionTitle}>{t('common.price')}</span>,
        children: (
          <div className={styles.priceSection}>
            <div className={styles.priceValueContainer}>
              <span className={styles.priceLabel}>${priceRange[0].toLocaleString()}</span>
              <span className={styles.priceLabel}>${priceRange[1].toLocaleString()}</span>
            </div>
            <Slider
              range
              value={priceRange}
              max={10000}
              onChange={val => setPriceRange(val as [number, number])}
              styles={sliderStyles}
            />
          </div>
        ),
      },
    ],
    [t, tempSelection, priceRange],
  );

  return (
    <div className={styles.floatingWindow}>
      <Collapse
        ghost
        accordion
        items={accordionItems}
        defaultActiveKey={['1']}
        className={styles.luxuryCollapse}
      />

      <div className={styles.footer}>
        <button className={styles.resetBtn} onClick={handleReset}>
          {t('common.clearAll')}
        </button>
        <Button className={styles.applyBtn} onClick={handleApply}>
          {t('common.apply')}
        </Button>
      </div>
    </div>
  );
}
