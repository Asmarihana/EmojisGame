import './index.css'

const LoseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WinImg : LoseImg
  const gameStatus = isWon ? 'You Won' : <p>You Lose</p>
  const scoreLabel = isWon ? <p>Best Score</p> : <p>Score</p>
  return (
    <div className="card-container">
      <div className="score-card">
        <h1>{gameStatus}</h1>
        <h1>{scoreLabel}</h1>
        <p className="score">{score}/12</p>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image">
        <img src={imageUrl} alt="win or lose" className="img" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
