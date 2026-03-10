import { CategoryIntro } from './components/CategoryIntro';
import { CategorySectionManager } from './components/CategorySectionManager';
import styles from './styles.module.css';

const Category = () => {
  return (
    <div className={styles.pageWrapper}>
      <CategoryIntro />

      <main className={styles.mainContent}>
        <CategorySectionManager />
      </main>
    </div>
  );
};
export default Category;
