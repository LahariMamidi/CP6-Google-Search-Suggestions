// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickArrow} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    clickArrow(suggestion)
  }

  return (
    <li className="suggestion">
      <p className="title">{suggestion}</p>
      <img
        className="arrow"
        onClick={onClickArrow}
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
