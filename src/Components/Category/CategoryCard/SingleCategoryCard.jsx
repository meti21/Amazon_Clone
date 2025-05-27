import styles from "./Category.module.css";
import { Link } from "react-router-dom";

function SingleCategoryCard({data}) {
  console.log(data)

  return (
    <div className={styles.category}>
      <Link to={`/category/${data?.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>

        <img src={data?.img} alt="" />

        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default SingleCategoryCard;
