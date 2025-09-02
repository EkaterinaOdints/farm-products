import styles from "./style.module.css";
import classNames from "classnames";
import type { Feature } from "../../../types.ts";

interface Props {
  feature: Feature,
}

const FeatureCard = (props: Props) => {
  const {feature} = props;

  const {title, description, cardId, tag} = feature;
  const isNatural = tag === "natural";

  return (
    <div className={classNames(styles.root, tag && isNatural ? styles.natural : styles.industrial, cardId && styles[cardId])}>
      <div className={styles.tagsWrapper}>
        <span className={styles.tag}>{tag && isNatural ? "Фермерские продукты" : "Магазинные продукты"}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={description}>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
};

export default FeatureCard;