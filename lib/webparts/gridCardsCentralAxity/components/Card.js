import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GridCardsCentralAxity.module.scss";
var Card = function (props) {
    var background = props.background, text = props.text, link = props.link, withContent = props.withContent, typeOpen = props.typeOpen;
    var handleRedirect = function () {
        if (typeOpen === "popup") {
            window.open(link, "", typeOpen);
        }
        else {
            window.open(link, typeOpen);
        }
    };
    return (React.createElement("div", { className: "".concat(withContent, " ").concat(styles.curso_pointer, " ") },
        React.createElement("div", { onClick: handleRedirect, className: "".concat(background === "bg_1"
                ? styles.bg_1
                : background === "bg_2"
                    ? styles.bg_2
                    : background === "bg_3"
                        ? styles.bg_3
                        : background === "bg_4"
                            ? styles.bg_4
                            : styles.default, " p-3 d-flex justify-content-center ").concat(styles.card, " ") },
            React.createElement("div", { className: "".concat(styles.link) }, text))));
};
export default Card;
//# sourceMappingURL=Card.js.map