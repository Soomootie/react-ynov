import {UserTypes} from '../constants'

const fakeUsers = [
  {
    email: "bob@gmail.com",
    password: 'bob',
    user_type: 'SUPER_ADMIN'
  },
  {
    email: "nope@gmail.com",
    password: 'nope',
    user_type: 'ADMIN'
  }]

/**
 * Fake user service
 */
class UserService {
  isLogged = false

  /**
   * Check couple email and password
   * @param email
   * @param password
   */
  checkEmailPassword(email, password) {
    // FIXME Connection with first fake user only
    return email === fakeUsers[0].email && password === fakeUsers[0].password;
  };

  /**
   * Check user type match UserTypes
   * @param userType
   * @return {boolean}
   */
  checkUserType(userType) {
    return (userType !== UserTypes.SUPER_ADMIN || userType !== UserTypes.ADMIN || userType !== UserTypes.REGULAR);
  }

  /**
   * Api login (with the first fake user)
   * @param email
   * @param password
   * @return {Promise<unknown>}
   */
  login({email, password}) {
    return new Promise((response,rejected) => {
      setTimeout(() => {
        if (! this.checkEmailPassword(email, password)) {
          rejected({
            err: 'Wrong email or password',
          })
        }
        this.isLogged = true
        response(fakeUsers[0])
      },1000)
    })
  }

  /**
   * Api logout
   * @return {Promise<unknown>}
   */
  logout() {
    return new Promise((response,rejected) => {
      setTimeout(() => {
        this.isLogged = false
        response(true)
      },1000)
    })
  }

  /**
   * Get user infos from the first fake users
   * @return {Promise<unknown>}
   */
  getInfos() {
    return new Promise((response,rejected) => {
      setTimeout(() => {
        if(this.isLogged){
          response(fakeUsers[0])
        } else {
          rejected({
            err: "You're not logged",
          })
        }
      },1000)
    })
  }

  /**
   * SignIn
   * @param email
   * @param password
   * @param userType
   */
  signIn({email, password, userType}){
    return new Promise((response, rejected) => {
      if (!this.checkUserType(userType)){
        rejected({
          err: `Unknown type: ${userType}`
        })
      } else {
        response(fakeUsers[1]);
      }
    })
  }

}

const userService = new UserService();
export default userService;

