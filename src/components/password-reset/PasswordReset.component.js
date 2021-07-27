import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

const PasswordReset = ({
  handleOnChange,
  formSwitcher,
  handleOnResetSubmit,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-danger text-center'>Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter Email'
              />
            </Form.Group>

            <Button className='mt-3' type='submit'>
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href='#!' onClick={() => formSwitcher('login')}>
            try Login now
          </a>
        </Col>
      </Row>
    </Container>
  )
}

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}

export default PasswordReset
