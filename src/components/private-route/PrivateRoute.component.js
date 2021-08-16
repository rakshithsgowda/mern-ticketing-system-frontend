import { Redirect, Route } from 'react-router-dom'
import DefaultLayout from '../../layout/DefaultLayout'

// fake login auth
const isAuth = true

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to='/' />
      }
    />
  )
}

export default PrivateRoute
