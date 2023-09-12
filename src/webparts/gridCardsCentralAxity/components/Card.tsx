import * as React from "react";
import { ICardProps } from "./IGridCardsCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GridCardsCentralAxity.module.scss";

const Card: React.FC<ICardProps> = (props) => {
  const { background, text, link, withContent, typeOpen } = props;
  const handleRedirect = (): void => {
    if (typeOpen === "popup") {
      window.open(link, "", typeOpen);
    } else {
      window.open(link, typeOpen);
    }
  };
  return (
    <div className={`${withContent} ${styles.curso_pointer} `}>
      <div
        onClick={handleRedirect}
        className={`${
          background === "bg_1"
            ? styles.bg_1
            : background === "bg_2"
            ? styles.bg_2
            : background === "bg_3"
            ? styles.bg_3
            : background === "bg_4"
            ? styles.bg_4
            : styles.default
        } p-3 d-flex justify-content-center ${styles.card} `}
      >
        <div className={`${styles.link}`}>{text}</div>
      </div>
    </div>
  );
};

export default Card;
