import React from 'react';

const StatisticTable = (props) => {
    return (<div>
        <p>Statistic for {props.mode} mode.</p>
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Name</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                {props.users[props.index].map(el => {
                    return <tr><td>{el.id}</td><td>{el.name}</td><td>{el.time}</td></tr>
                })}
            </tbody>
        </table>
    </div>)
}

export default StatisticTable;