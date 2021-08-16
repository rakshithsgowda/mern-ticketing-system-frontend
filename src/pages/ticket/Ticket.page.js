import { Container, Row, Col, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'

import tickets from '../../assets/data/dummy-ticket.json'
import MessageHistory from '../../components/message-history/MessageHistory.component'

const ticket = tickets[0]
const Ticket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col className='fw-bolder text-secondary'>
          <div className='subject'>Subject : {ticket.subject}</div>
          <div className='date'>Subject : {ticket.addedAt}</div>
          <div className='status'>Subject : {ticket.status}</div>
        </Col>
        <Col className='text-end'>
          <Button variant='outline-info'>close ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <MessageHistory message={ticket.history} />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket
