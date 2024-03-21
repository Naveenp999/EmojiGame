import './index.css'

const Navbar = props => {
  const {Score, topscore, istrue} = props
  return (
    <nav className="nav-bar">
      <div className="sub-nav horizantal">
        <div className="title-container horizantal">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="game-logo"
            alt="emoji logo"
          />
          <h1 className="game-name">Emoji Game</h1>
        </div>
        {istrue && (
          <div className="score-text-container horizantal">
            <p className="score">{`Score: ${Score}`}</p>
            <p className="score">{`Top Score: ${topscore}`}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
