import './index.css'

const EmojiCard = props => {
  const {content, countattempts} = props
  const {id, emojiName, emojiUrl} = content

  const clickevent = () => countattempts(id)

  return (
    <li className="emoji-item-container">
      <button className="button" onClick={clickevent}>
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
