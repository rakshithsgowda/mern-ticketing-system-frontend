import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
const LoginForm = ({ handleOnChange, email, pass }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-danger text-center'>Client Login</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                onChange={handleOnChange}
                value={email}
                placeholder='Enter Email'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                onChange={handleOnChange}
                value={pass}
                placeholder='Enter password'
                required
              />
            </Form.Group>
            <Button className='mt-3' type='submit'>
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!'>Forgot Password ?</a>
        </Col>
      </Row>
    </Container>
  )
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
}

export default LoginForm
