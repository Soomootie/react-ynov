import React from 'react';
import {useHistory} from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import {userService} from "../../services";

/**
 * SignIn page
 * @return {JSX.Element}
 * @constructor
 */
const SignInPage = () => {
  const history = useHistory();

  /**
   * Send signIn demand trough the api
   * @param email
   * @param password
   * @param userType
   */
  const signIn = ({email, password, userType}) => {
    userService.signIn({email, password, userType}).then(
      () => history.push('/')
    )
  };

  return (
    <div>
      <AuthForm onSubmit={signIn} isSignIn/>
    </div>
  );
};

export default SignInPage;
