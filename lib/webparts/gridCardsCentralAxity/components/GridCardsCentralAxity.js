import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
var GridCardsCentralAxity = function (props) {
    var collectionData = props.collectionData;
    return (React.createElement("div", { className: "".concat(styles.cards__container, " row") }, collectionData !== undefined
        ? collectionData.map(function (item, index) { return (React.createElement(Card, { key: index, text: item.text, background: item.typeBackground, withContent: item.withContent, link: item.link, typeOpen: item.typeOpen })); })
        : ""));
};
export default GridCardsCentralAxity;
//# sourceMappingURL=GridCardsCentralAxity.js.map