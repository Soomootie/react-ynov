import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {UserTypes} from '../../constants'

/**
 * Authentication component
 * @param onSubmit
 * @param isSignIn
 * @return {JSX.Element}
 * @constructor
 */
const AuthForm = ({onSubmit, isSignIn= false}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('');

  function onSubmitForm(e){
    e.preventDefault()
    onSubmit({
      email,
      password,
      userType
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input name="Login" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input name="Password" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* Display sign in method */}
        {isSignIn &&
          <select
            name="type"
            id="typeSelect"
            onChange={(e) => setUserType(e.target.value)}
            defaultValue={UserTypes.REGULAR}
          >
            <option value={UserTypes.SUPER_ADMIN}>Super administrator</option>
            <option value={UserTypes.ADMIN}>Administrator</option>
            <option value={UserTypes.REGULAR}>Regular user</option>
          </select>
        }
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthForm;


AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
