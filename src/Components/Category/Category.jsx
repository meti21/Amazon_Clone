import { CategoryInfo } from "./catagoryData";
import CategoryCard from "./CategoryCard/SingleCategoryCard";

import styles from "./CategoryCard/Category.module.css";

function Category() {
  return (
    <section className={styles.category__container}>
      {/* Key attribute is not obligatory, but for effective mapping it is advisable to provide unique identifier */}

      {CategoryInfo?.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
