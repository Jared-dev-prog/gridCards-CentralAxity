import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
import { IGridCardsCentralAxityProps } from "./IGridCardsCentralAxityProps";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
const GridCardsCentralAxity: React.FC<IGridCardsCentralAxityProps> = (
  props
) => {
  const { collectionData } = props;

  return (
    <div className={`${styles.cards__container} row`}>
      {collectionData !== undefined
        ? collectionData.map((item, index) => (
            <Card
              key={index}
              text={item.text}
              background={item.typeBackground}
              withContent={item.withContent}
              link={item.link}
            />
          ))
        : ""}
    </div>
  );
};

export default GridCardsCentralAxity;
