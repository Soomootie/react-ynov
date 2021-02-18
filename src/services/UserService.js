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
  checkEmailPassword(email, password) {};

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
        this.isLogged = true
        // TODO Values
        response({
          name: "Rémi"
        })
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
          // TODO VALUES
          response({
            name: "Rémi"
          })
        } else {
          rejected({
            err: "You're not logged"
          })
        }
      },1000)
    })
  }

}

const userService = new UserService();
export default userService;

