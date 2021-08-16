import { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'
import SearchForm from '../../components/search-form/SearchForm.component'
import TicketTable from '../../components/ticket-table/TicketTable.component'
import tickets from '../../assets/data/dummy-ticket.json'

const TicketLists = () => {
  const [str, setStr] = useState('')
  const [displayTicket, setDisplayTicket] = useState(tickets)

  useEffect(() => {}, [str, displayTicket])

  const handleOnChange = (e) => {
    const { value } = e.target
    setStr(value)
    searchTicket(value)
  }

  const searchTicket = (searchString) => {
    const displayingTicket = tickets.filter((row) =>
      row.subject.toLowerCase().includes(searchString.toLowerCase())
    )
    console.log(displayingTicket)
    setDisplayTicket(displayingTicket)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='Ticket Lists' />
        </Col>
      </Row>
      <Row className='mt-4 mb-4 p-4'>
        <Col>
          <Button variant='info'>Add New Ticket</Button>
        </Col>
        <Col className='text-end'>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  )
}

export default TicketLists
