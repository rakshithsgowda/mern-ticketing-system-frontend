import { useState } from 'react'
import LoginForm from '../../components/login/Login.component'
import './entry.page.style.css'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break

      default:
        break
    }

    console.log(name, value)
  }

  return (
    <div className='entry-page bg-info'>
      <section className='jumbotron form-box p-5 bg-light'>
        <LoginForm
          handleOnChange={handleOnChange}
          email={email}
          pass={password}
        />
      </section>
    </div>
  )
}

export default Entry
