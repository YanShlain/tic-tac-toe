import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        // Yan: The state definition
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true, // Defines if the next click is 'X' or 'O'
        };
    }

    handleClick(i) {

        // Create shallow copy of the squere states
        const squares = this.state.squares.slice();

        // Switch 'X' vs 'O' based on the last move.
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ 
            squares: squares,
            xIsNext: !this.state.xIsNext, // Switch 'X' vs 'O' based on the last move.
        });
    }

    renderSquare(i) {
        return (
            // Yan: Sending i as props to Square component
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
