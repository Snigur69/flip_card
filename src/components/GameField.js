import React from "react";
import Card from "./Card";
import cardStyles from "./Card.module.css";
import style from "./GameField.module.css";

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 4,
            cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
            shuffledCards: [],
            compareCards: [],
            cardNodes: [],
        };
        this.singleCardClick = this.singleCardClick.bind(this);
        this.resetCards = this.resetCards.bind(this);
    }
    componentWillMount() {
        let shuffledCards = this.state.cards.sort(() => Math.random() - 0.5);
        let field = [];
        let k = 0;
        for (let i = 0; i < this.state.size; i++) {
            field[i] = [];
            for (let j = 0; j < this.state.size; j++) {
                field[i][j] = shuffledCards[k];
                k++;
            }
        }
        this.setState({ shuffledCards: field });
    }
    resetCards() {
        let cards = document.getElementsByClassName(cardStyles.flip_card_inner);
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.transform = "rotateY(0deg)";
        }
        this.setState({
            compareCards: [],
            cardNodes: [],
        });
    }

    singleCardClick(e) {
        if (e.currentTarget.style.transform !== "rotateY(180deg)") {
            e.currentTarget.style.transform = "rotateY(180deg)";
            if (this.state.compareCards.length < 2) {
                this.setState({
                    compareCards: [
                        ...this.state.compareCards,
                        e.currentTarget.attributes["data-content"].value,
                    ],
                    cardNodes: [...this.state.cardNodes, e.currentTarget],
                });
                setTimeout(() => {
                    if (this.state.compareCards.length == 2) {
                        if (
                            this.state.compareCards[0] !==
                            this.state.compareCards[1]
                        ) {
                            setTimeout(() => {
                                this.resetCards();
                            }, 500);
                        } else {
                            setTimeout(() => {
                                for (
                                    let i = 0;
                                    i < this.state.cardNodes.length;
                                    i++
                                ) {
                                    this.state.cardNodes[
                                        i
                                    ].parentNode.parentNode.remove();
                                }
                                this.resetCards();
                            }, 500);
                        }
                    }
                }, 0);
            } else {
                this.resetCards();
            }
        }
    }

    render() {
        return (
            <div>
                <table className={style.gamefield}>
                    {this.state.shuffledCards.map((el) => {
                        return (
                            <tr>
                                {el.map((deepEl) => {
                                    return (
                                        <td>
                                            <Card
                                                onClick={this.singleCardClick}
                                                content={deepEl}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

export default GameField;
