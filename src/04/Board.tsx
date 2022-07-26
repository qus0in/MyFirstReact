import React from 'react'
import Square from './Square'

class Board extends React.Component<{},
  { squares: Array<any>, xIsNext: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i: number) {
    // 배열의 복사본 생성
    // console.log(i)
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return // 결과가 났거나 이미 차있는 박스라면 작동 무시
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext, })
  }

  renderSquare(i: number) {
    // return <Square value={i} />
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  render() {
    // const status = 'Next player: X';
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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

function calculateWinner(squares: Array<any>) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // 1) 첫번째 자리가 null이 아님 2) 첫번째 자리가 두.세번째 자리와 일치
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board