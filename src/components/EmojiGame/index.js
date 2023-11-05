/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameInProgress: true, clickedEmojisList: [], topScore: 0}

  reset = () => {
    const {clickedEmojisList} = this.state
    const emojisListLength = clickedEmojisList.length
    this.finishGameAndSetTopScore(emojisListLength)
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  scoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.reset}
      />
    )
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }
    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const emojisListLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(emojisListLength)
    } else {
      if (emojisList.length - 1 === emojisListLength) {
        this.finishGameAndSetTopScore(emojisListLength)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, clickedEmojisList, topScore} = this.state
    return (
      <div className="background">
        <Navbar
          score={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game">
          {isGameInProgress ? this.renderEmojisList() : this.scoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
