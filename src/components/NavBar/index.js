import './index.css'

const NavBar = props => {
  const {score, isGameInProgress, topScore} = props
  return (
    <div className="navbar">
      <div className="nav-heading">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt=" emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div>
        {isGameInProgress && (
          <div className="scoreCard">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default NavBar
