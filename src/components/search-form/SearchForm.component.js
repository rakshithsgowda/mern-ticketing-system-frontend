import PropTypes from 'prop-types'
import { Col, Form, Row } from 'react-bootstrap'

const SearchForm = ({ handleOnChange, str }) => {
  console.log(str)
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm='3'>
            Search:
          </Form.Label>
          <Col sm='9'>
            <Form.Control
              name='searchStr'
              placeholder='Search...'
              onChange={handleOnChange}
              value={str}
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchForm

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
}
