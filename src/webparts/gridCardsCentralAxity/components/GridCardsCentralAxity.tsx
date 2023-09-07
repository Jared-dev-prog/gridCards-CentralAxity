import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
import { IGridCardsCentralAxityProps } from "./IGridCardsCentralAxityProps";
import Card from "./Card";

const GridCardsCentralAxity: React.FC<IGridCardsCentralAxityProps> = (props) => {
  const { collectionData } = props;
  console.log(collectionData);

  return (
    <section className={styles.cards__container}>
      {collectionData !== undefined
        ? collectionData.map((item, index) => (
            <Card key={index} text={item.text} background={item.typeBackground} link={item.link} />
          ))
        : ""}
    </section>
  );
};

export default GridCardsCentralAxity;
