import Login from '../../components/login/Login.component'
import './entry.page.style.css'

const Entry = () => {
  return (
    <div className='entry-page bg-info' >
      <div className="jumbotron form-box p-5 bg-light">
      <Login/>
      </div>
    </div>
  )
}

export default Entry
