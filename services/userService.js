import * as usersDal from "../dal/usersDal.js";
import { hashPassword, comparePassword } from "../utils/password.js";

//================================================
//               helper functions
//================================================


//================================================
//               service functions
//================================================
/**
 *
 * @param {*} username
 * @param {*} email
 * @param {*} password
 */
export async function registerUser(username, email, password) {
  const user = await usersDal.findUserByEmailOrUsername({ username, email });

  //throw an error if the username or email already exists.
  if (user) {
    //check if Username matches
    if (user.username === username) {
      throw new AppError("This username is already taken.", 400);
    }

    //check if Email matches
    if (user.email === email) {
      throw new AppError("This email is already registered.", 400);
    }
  }
  
  //hash the password to store in the DB.
  const hashedPwd = await hashPassword(password);
  
  //add the user to the db.
  await usersDal.addUser({ username, email, hashedPwd });
}
