import { motion } from 'framer-motion';
import { HEADER_ANIMATION, CHILD_VARIANTS, LINE_VARIANTS } from './const';
import { formatSectionTitle } from './utils';
import type { SectionHeaderProps } from './types';
import styles from './styles.module.css';

export const SectionHeader = ({ title, subtitle, alignment = 'center' }: SectionHeaderProps) => {
  return (
    <motion.header
      className={`${styles.header} ${styles[alignment]}`}
      variants={HEADER_ANIMATION}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2 variants={CHILD_VARIANTS} className={styles.title}>
        {formatSectionTitle(title)}
      </motion.h2>

      <div className={styles.lineWrapper}>
        <motion.div variants={LINE_VARIANTS} className={styles.goldLine} />
      </div>

      {subtitle && (
        <motion.p variants={CHILD_VARIANTS} className={styles.subtitle}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
};
