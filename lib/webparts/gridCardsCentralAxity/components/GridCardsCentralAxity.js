import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
import Card from "./Card";
var GridCardsCentralAxity = function (props) {
    var collectionData = props.collectionData;
    console.log(collectionData);
    return (React.createElement("section", { className: styles.cards__container }, collectionData !== undefined
        ? collectionData.map(function (item, index) { return (React.createElement(Card, { key: index, text: item.text, background: item.typeBackground, link: item.link })); })
        : ""));
};
export default GridCardsCentralAxity;
//# sourceMappingURL=GridCardsCentralAxity.js.map