import { Form, Button, Row, Col } from 'react-bootstrap'
import './AddTicketForm.component.style.css'

import propTypes from 'prop-types'

export default function AddTicketForm({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) {
  console.log(formData)
  return (
    <div className='mt-3 ms-auto me-auto bg-light jumbotron add-new-ticket'>
      <h1 className='text-secondary text-center'>Add New Ticket</h1>
      <hr />
      <Form
        autoComplete='off'
        onSubmit={handleOnSubmit}
        className='d-grid gap-2'
      >
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name='subject'
              // minLength='3'
              value={formData.subject}
              onChange={handleOnChange}
              placeholder='subject'
              required
            />
            <Form.Text className='text-warning'>
              {formDataError.subject && 'Subject is required'}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='date'
              name='issueDate'
              onChange={handleOnChange}
              value={formData.date}
              // placeholder='Enter password'
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as='textarea'
            name='detail'
            rows='5'
            value={formData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type='submit' className='mt-4' variant='secondary'>
          Login
        </Button>
      </Form>
    </div>
  )
}

AddTicketForm.propTypes = {
  handleOnSubmit: propTypes.func.isRequired,
  handleOnChange: propTypes.func.isRequired,
  formData: propTypes.object.isRequired,
  formDataError: propTypes.object.isRequired,
}
