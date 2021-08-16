import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label className='fw-bold'>REPLY - </Form.Label>
      <Form.Text>
        Please reply to the message here OR Update the ticekt
      </Form.Text>
      <Form.Control
        value={message}
        as='textarea'
        row='8'
        onChange={handleOnChange}
        name='detail'
      />
      <div className='text-end mt-3 mb-3'>
        <Button variant='info' type='submit'>
          Reply
        </Button>
      </div>
    </Form>
  )
}

export default UpdateTicket

UpdateTicket.propTypes = {
  message: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}
