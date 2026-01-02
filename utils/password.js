import bcrypt from "bcryptjs";

/**
 * hash the password.
 * @param {*} password
 * @returns
 */
export const hashPassword = async (password) => {
  const rounds = 10;

  const hashed = await bcrypt.hash(password, rounds);

  return hashed;
};

/**
 * compare the hashed and the plain password.
 * @param {*} plain
 * @param {*} hashed
 * @returns
 */
export const comparePassword = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed);
};
