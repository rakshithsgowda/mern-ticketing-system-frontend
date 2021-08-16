import { Table } from 'react-bootstrap'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'

const TicketTable = ({ tickets }) => {
  // if (!tickets.length)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' className='text-center'>
              No tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default TicketTable

TicketTable.propType = {
  tickets: PropType.array.isRequired,
}
