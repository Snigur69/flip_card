import React from "react";
import styles from './StartWindow.module.css';
import GameField from './GameField';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MenuCard from './MenuCard';
import Login from "./Login";
import GameStatistic from './GameStatistic';

class StartWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            currentMode: '',
            modes: ['Easy', 'Hard'],
            currentModeName: '',
            modeValues: [[1, 1, 2, 2], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]],
            fieldSizes: [2, 4],
            fieldSize: 0,
            login: '', 
            users: [
                [
                    {
                        id: 1,
                        name: 'Anton1',
                        time: 10
                    },
                    {
                        id: 2,
                        name: 'Anton2',
                        time: 20
                    },
                    {
                        id: 3,
                        name: 'Anton3',
                        time: 30
                    }
                ],
                [
                    {
                        id: 1,
                        name: 'AntonHard1',
                        time: 50
                    },
                    {
                        id: 2,
                        name: 'AntonHard2',
                        time: 60
                    },
                    {
                        id: 3,
                        name: 'AntonHard3',
                        time: 70
                    }
                ]
            ]
        }
        this.gameModeDef = this.gameModeDef.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({
            currentMode: this.state.modeValues[0],
            fieldSize: this.state.fieldSizes[0],
            currentModeName: this.state.modes[0]
        })
    }

    gameModeDef(e) {
        this.setState({
            currentMode: this.state.modeValues[+e.target.attributes.mode.value],
            fieldSize: this.state.fieldSizes[+e.target.attributes.mode.value],
            currentModeName: this.state.modes[+e.target.attributes.mode.value]
        })
    }

    loginChange(e) {
        this.setState({login: e.target.value})
    }
    loginSubmit() {

    }

    render() {
        return (
            <div>


                <Router>
                    <Route path="/game">
                        <GameField size={this.state.fieldSize} cards={this.state.currentMode} />
                    </Route>
                    <Route  path="/start">
                        <h1>Welcome to the FLIP CARD GAME ! </h1>
                        <h1>Game Mode: {this.state.currentModeName}</h1>
                        <div className={styles.start_wrap}>
                            <NavLink to="/game" className={styles.navLink}>
                                <MenuCard front='Play?' myPath='/game' backLink='Play' />
                            </NavLink>
                            <MenuCard choseMode={this.gameModeDef} modes={['Easy', 'Hard']} front="Game Mode" />
                            <NavLink to="/stat" className={styles.navLink}>
                                <MenuCard front='Statistic' myPath='/stat' backLink='View statistic' />
                            </NavLink>
                        </div>
                    </Route>
                    <Route path="/stat">
                        <GameStatistic users={this.state.users} />
                    </Route>
                    <Route exact path="/">
                        <Login loginChange={this.loginChange} login={this.state.login} loginSubmit={this.loginSubmit}/>
                    </Route>
                </Router>
            </div>

        );
    }
}

export default StartWindow;
