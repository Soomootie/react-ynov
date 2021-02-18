import React, {useState, useEffect} from 'react';
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
  const [logSuccess, setLogSuccess] = useState({state: true, err: null});

  /**
   * Send login trough the api
   * @param email
   * @param password
   */
  const onLogin = ({email, password}) => {
    userService.login({email, password}).then(() => {
      setLogSuccess(prevLog => {
        let _log = {...prevLog};
        _log.state = true;
        _log.err = null;
        return _log;
      });
      return history.push('/');
    })
      .catch(err => {
        setLogSuccess((prevLog) => {
          let _log = {...prevLog};
          _log.state = false;
          _log.err = err.err;
          return _log
        });
    })
  }

  useEffect(() => {
    if (!logSuccess.state) {
    }
  }, [logSuccess]);

  return (
    <div>
      <AuthForm onSubmit={onLogin}/>
      {/* If log fail display the error message */}
      {!logSuccess.state &&
        <p>{logSuccess.err}</p>
      }
    </div>
  );

};

export default AuthPage;
