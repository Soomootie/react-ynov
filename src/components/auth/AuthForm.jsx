import React, {useState} from 'react';
import PropTypes from 'prop-types';

// /**
//  * User types => super_admin, admin or regular
//  * @type {{SUPER_ADMIN: string, REGULAR: string, ADMIN: string}}
//  */
// const USER_TYPES = {
//   SUPER_ADMIN: 'SUPER_ADMIN',
//   ADMIN: 'ADMIN',
//   REGULAR: 'REGULAR'
// }

/**
 * Authentication component
 * @param onSubmit
 * @return {JSX.Element}
 * @constructor
 */
const AuthForm = ({onSubmit}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [userType, setUserType] = useState('');

  function onSubmitForm(e){
    e.preventDefault()
    onSubmit({
      email,
      password,
      // userType
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input name="Login" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input name="Password" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* TODO Move this to sign in section */}
        {/*<select name="type" id="typeSelect" value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value={USER_TYPES.SUPER_ADMIN}>Super administrator</option>
          <option value={USER_TYPES.ADMIN}>Administrator</option>
          <option value={USER_TYPES.REGULAR} selected>Regular user</option>
        </select>*/}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthForm;


AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
