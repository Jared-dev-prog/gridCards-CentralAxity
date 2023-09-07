import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
import { ICardProps } from "./IGridCardsCentralAxityProps";

const Card: React.FC<ICardProps> = (props) => {
  const { background, text, link } = props;

  return (
    <a
      href={link}
      className={`${
        background === "1"
          ? styles.typeBackground__1
          : background === "2"
          ? styles.typeBackground__2
          : background === "3"
          ? styles.typeBackground__3
          : background === "4"
          ? styles.typeBackground__4
          : background === "5"
          ? styles.typeBackground__5
          : background === "6"
          ? styles.typeBackground__6
          : background === "7"
          ? styles.typeBackground__7
          : background === "8"
          ? styles.typeBackground__8
          : ""
      } ${styles.card}`}>
      {text}
    </a>
  );
};

export default Card;
