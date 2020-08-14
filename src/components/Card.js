import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.single_card}>
            <div className={styles.flip_card}>
                <div
                    onClick={props.onClick}
                    data-content={props.content}
                    className={styles.flip_card_inner}
                >
                    <div className={styles.flip_card_front}></div>
                    <div className={styles.flip_card_back}>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
