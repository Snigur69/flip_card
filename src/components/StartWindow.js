import React from "react";
import styles from './StartWindow.module.css';
import GameField from './GameField';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MenuCard from './MenuCard';


class StartWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            currentMode: '',
            modes: ['Easy', 'Hard'],
            currentModeName: '',
            modeValues: [[1, 1, 2, 2], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9]],
            fieldSizes: [2, 4],
            fieldSize: 0
        }
        this.gameModeDef = this.gameModeDef.bind(this);
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

    render() {
        return (
            <div>


                <Router>
                    <Route path="/game">
                        <GameField size={this.state.fieldSize} cards={this.state.currentMode} />
                    </Route>
                    <Route exact path="/">
                        <h1>Welcome to the FLIP CARD GAME ! </h1>
                        <h1>Game Mode: {this.state.currentModeName}</h1>
                        <div className={styles.start_wrap}>
                            <NavLink to="/game" className={styles.navLink}>

                                <MenuCard front='Play?' myPath='/game' backLink='Play' />
                            </NavLink>
                            <MenuCard choseMode={this.gameModeDef} modes={['Easy', 'Hard']} front="Game Mode" />
                        </div>
                    </Route>
                </Router>
            </div>

        );
    }
}

export default StartWindow;
