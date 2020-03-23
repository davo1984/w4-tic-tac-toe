import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        renderSquare(i) {
            return <Square />;
    }
    
    function buildRows(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <li>{number}</li>
        );
        return (
            <ul>{rows}</ul>
        );
    }

    function buildcolumns(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>

            <li>{buildcolumns()}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
        // Use two loops to make squares 
        // Allow board size to be flexible
        let numColumns = 3;
        let numRows = 3;
        let tiles = [];
        for (let i = 0; numRows < i; i++) {
            let row = [];
            for (let j = 0; numColumns < j; j++) {
                row.push(this.renderSquare(i * numColumns + j));
            }
            tiles.push(<div className="board-row">{row}</div>);
        }
        console.log({ tiles });

        return (
            <div>
                {tiles}
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


serviceWorker.unregister();