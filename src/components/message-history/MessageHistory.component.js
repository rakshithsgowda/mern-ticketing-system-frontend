import './messageHistory.style.css'

import PropTypes from 'prop-types'
const MessageHistory = ({ message }) => {
  // console.log(message)
  if (!message) return null
  return message.map((row, i) => (
    <div key={i} className='message-history mt-3'>
      <div className='send fw-bold'>
        <div className='sender'>{row.messageBy}</div>
        <div className='date'>{row.date}</div>
      </div>
      <div className='message'>{row.message}</div>
    </div>
  ))
}

export default MessageHistory

MessageHistory.propTypes = {
  message: PropTypes.array.isRequired,
}
