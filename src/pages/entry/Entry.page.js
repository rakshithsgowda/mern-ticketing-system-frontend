import { useState } from 'react'
import LoginForm from '../../components/login/Login.component'
import PasswordReset from '../../components/password-reset/PasswordReset.component'
import './entry.page.style.css'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

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
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      return alert('Fill up all the form elements!')
    }
    // TODO call api to submit the form
    console.log(email, password)
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return alert('Please enter the email!')
    }
    // TODO call to api to submit
    console.log(email)
  }

  const formSwitcher = (formType) => {
    setFormLoad(formType)
  }

  return (
    <div className='entry-page bg-info'>
      <section className='jumbotron form-box p-5 bg-light'>
        {formLoad === 'login' && (
          <LoginForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {formLoad === 'reset' && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </section>
    </div>
  )
}

export default Entry
