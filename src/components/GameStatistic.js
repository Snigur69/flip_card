import React from 'react';
import StatisticTable from './StatisticTable';
import styles from './GameStatistic.module.css';
import { NavLink } from "react-router-dom";


const GameStatistic = (props) => {
    return (<div>
        <div className={styles.game_stat_wrap}>
            <StatisticTable mode="Easy" index={0} users={props.users} />
            <StatisticTable mode="Hard" index={1} users={props.users} />
        </div>
        <NavLink className={styles.back_btn} to="/start">Back</NavLink>

    </div>
    )
}

export default GameStatistic;