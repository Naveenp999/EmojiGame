/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'

import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isGameOn: true, clickedemojislist: [], topscore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  continuegame = () => {
    const modifiedList = this.shuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {modifiedList.map(element => (
          <EmojiCard
            key={element.id}
            content={element}
            countattempts={this.attemptsCount}
          />
        ))}
      </ul>
    )
  }

  loseorwin = () => {
    const {clickedemojislist} = this.state
    const {emojisList} = this.props
    const score = clickedemojislist.length
    return (
      <WinOrLoseCard
        Score={score}
        againplay={this.eventclick}
        originallength={emojisList.length}
      />
    )
  }

  eventclick = () => this.setState({isGameOn: true, clickedemojislist: []})

  attemptsCount = id => {
    const {clickedemojislist, topscore} = this.state
    const {emojisList} = this.props
    let newtopscore = Math.max(topscore, clickedemojislist.length)
    const check = clickedemojislist.find(element => element === id)
    if (check || clickedemojislist.length === emojisList.length - 1) {
      if (!check) {
        newtopscore = emojisList.length
        this.setState(prev => ({
          clickedemojislist: [...prev.clickedemojislist, id],
        }))
      }
      this.setState({
        isGameOn: false,
        topscore: newtopscore,
      })
    } else {
      this.setState(prev => ({
        clickedemojislist: [...prev.clickedemojislist, id],
        isGameOn: true,
      }))
    }
  }

  render() {
    const {isGameOn, clickedemojislist, topscore} = this.state
    const score = clickedemojislist.length
    return (
      <div className="game-background">
        <Navbar topscore={topscore} Score={score} istrue={isGameOn} />
        <div className="game-subcontainer">
          <div className="game-card">
            {isGameOn ? this.continuegame() : this.loseorwin()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
