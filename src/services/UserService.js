const fakeUser = {
  email: "bob@gmail.com",
  password: 'bob',
  user_type: 'SUPER_ADMIN'
}

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
    return email === fakeUser.email && password === fakeUser.password;
  };

  /**
   * Api login
   * @param email
   * @param password
   * @return {Promise<unknown>}
   */
  login({email, password}) {
    return new Promise((response,rejected) => {
      setTimeout(() => {
        // TODO Check tuple email password
        if (! this.checkEmailPassword(email, password)) {
          rejected({
            err: 'Wrong email or password',
          })
        }
        this.isLogged = true
        response(fakeUser)
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
   * Get user infos
   * @return {Promise<unknown>}
   */
  getInfos() {
    return new Promise((response,rejected) => {
      setTimeout(() => {
        if(this.isLogged){
          response(fakeUser)
        } else {
          rejected({
            err: "You're not logged",
          })
        }
      },1000)
    })
  }

}

const userService = new UserService();
export default userService;

