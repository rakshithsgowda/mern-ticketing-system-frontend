import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.component'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'
import { shortText } from '../../utils/validation'

const InitialFormData = {
  subject: '',
  issueDate: null,
  detail: '',
}
const InitialFormErrorData = {
  subject: false,
  issueDate: false,
  detail: false,
}

export default function AddTicket() {
  const [formData, setFormData] = useState(InitialFormData)
  const [formDataError, setFormDataError] = useState(InitialFormErrorData)

  useEffect(() => {
    //
  }, [formData, formDataError])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setFormDataError(InitialFormErrorData)
    const isSubjectValid = await shortText(formData.subject)

    setFormDataError({
      ...InitialFormErrorData,
      subject: !isSubjectValid,
    })

    console.log('form submit request received', formData)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='New Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  )
}
