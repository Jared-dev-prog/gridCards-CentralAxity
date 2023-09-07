import * as React from "react";
import styles from "./GridCardsCentralAxity.module.scss";
var Card = function (props) {
    var background = props.background, text = props.text, link = props.link;
    return (React.createElement("a", { href: link, className: "".concat(background === "1"
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
                                        : "", " ").concat(styles.card) }, text));
};
export default Card;
//# sourceMappingURL=Card.js.map