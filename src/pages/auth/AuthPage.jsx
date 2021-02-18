import React from 'react';
import {useHistory} from 'react-router-dom'
import AuthForm from '../../components/auth/AuthForm';
import {userService} from '../../services';

/**
 * Authentication page
 * @return {JSX.Element}
 * @constructor
 */
const AuthPage = () => {
  const history = useHistory();

  /**
   *
   * @param email
   * @param password
   */
  const onLogin = ({email, password}) => {
    userService.login({email, password}).then(
      () => history.push('/')
    )
  }

  return (
    <div>
      <AuthForm onSubmit={onLogin}/>
    </div>
  );

};

export default AuthPage;
