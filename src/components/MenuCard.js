import React from 'react';
import styles from './MenuCard.module.css';
import { BrowserRouter as NavLink } from "react-router-dom";


const MenuCard = (props) => {
    let modes;
    if (props.modes) {
        modes = props.modes.map((el, ind) => {
            return <a onClick={props.choseMode} mode={ind}>{el}</a>
        })
    }
    return (<div>
        <div className={styles.single_card}>
            <div className={styles.flip_card}>
                <div
                    className={styles.flip_card_inner}
                >
                    <div className={styles.flip_card_front}>{props.front}</div>
                    <div className={styles.flip_card_back}>
                        {modes}
                        
                            {props.backLink}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default MenuCard;