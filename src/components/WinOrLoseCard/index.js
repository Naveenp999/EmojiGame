import './index.css'

const WinOrLoseCard = props => {
  const {Score, againplay, originallength} = props
  const text = Score === originallength ? 'You Won' : 'You Lose'
  const scoretext = Score === originallength ? 'Best Score' : 'Score'
  const imagelink =
    Score === originallength
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const clickplayagainevent = () => againplay()
  return (
    <div className="card-container">
      <div className="score-container">
        <h1 className="text">{text}</h1>
        <p className="score-text">{scoretext}</p>
        <p className="marks-format">{`${Score}/12`}</p>
        <button
          className="again-btn"
          onClick={clickplayagainevent}
          type="button"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imagelink} className="card-icon" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
