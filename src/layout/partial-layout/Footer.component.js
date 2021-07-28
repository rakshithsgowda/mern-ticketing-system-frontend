const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='text-center copy-end'>
      &copy; TICKETS-CRM all rights reserved - {year}
    </div>
  )
}

export default Footer
