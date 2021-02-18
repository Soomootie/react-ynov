import React, {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {UserContext} from "../../contexts";
import AuthForm from '../../components/auth/AuthForm';
import {userService} from '../../services';

/**
 * Authentication page
 * @return {JSX.Element}
 * @constructor
 */
const AuthPage = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  /**
   * Send login trough the api
   * @param email
   * @param password
   */
  const onLogin = ({email, password}) => {
    userService.login({email, password}).then(() => {
      userContext.refreshUserInfos();
      return history.push('/');
    }).catch(() => {
      userContext.refreshUserInfos();
    })

  }
  return (
    <div>
      <AuthForm onSubmit={onLogin}/>
      {/* If log fail display the error message */}
      {(!!userContext.userInfos && !!userContext.userInfos.err) &&
        <p>{userContext.userInfos.err}{console.log(userContext.userInfos)}</p>
      }
    </div>
  );

};

export default AuthPage;
