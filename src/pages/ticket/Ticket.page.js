import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'
import tickets from '../../assets/data/dummy-ticket.json'
import MessageHistory from '../../components/message-history/MessageHistory.component'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.component'
import { useParams } from 'react-router-dom'

// const ticket = tickets[0]
const Ticket = () => {
  const { tId } = useParams()

  const [message, setMessage] = useState('')
  const [ticket, setTicket] = useState('')

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      // doesnt work with strict equals
      if (tickets[i].id === tId * 1) {
        setTicket(tickets[i])
        continue
      }
    }
  }, [message, tId])

  const handleOnChange = (e) => {
    setMessage(e.target.value)
  }
  const handleOnSubmit = () => {
    alert('from submitted')
  }

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
          <div className='date'>Ticket Opened : {ticket.addedAt}</div>
          <div className='status'>Status : {ticket.status}</div>
        </Col>
        <Col className='text-end'>
          <Button variant='outline-info'>close ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          {ticket.history && <MessageHistory message={ticket.history} />}
        </Col>
      </Row>
      <hr />
      <Row className='mt-4'>
        <Col>
          <UpdateTicket
            message={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket
