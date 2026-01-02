import * as userService from "../services/userService.js";

/**
 * register users controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "Please provide all fields." });
    }

    await userService.registerUser(username, email, password);
  } catch (error) {
    next(error);
  }
}
