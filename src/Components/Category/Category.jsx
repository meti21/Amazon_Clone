import React from "react";
import { CategoryInfo } from "./catagoryData";
import CategoryCard from "./CategoryCard/SingleCategoryCard";

import styles from "./CategoryCard/Category.module.css";

function Category() {
  return (
    <section className={styles.category__container}>
      {/* use () to return JSX implicitly inside the arrow function in map but of you use {} you have to return the component */}
      {/* Key attribute is not obligatory, but for effective mapping it is advisable to provide unique identifier */}

      {CategoryInfo?.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
