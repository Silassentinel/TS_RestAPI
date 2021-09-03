// TODO - implement
// check and add from crypto demo proj
export default class HashGenerator {
  /**
    * Generates a hash from a password and a salt.
    * @param {string} salt - salt
    * @param {string} password - password to hash
    * @param {number} iterations - number of iterations
    * @param {number} keyLength - length of the key in bytes
    * @param {string} digest - hash algorithm
    * @returns
    */
  static generateHash(
    salt: string,
    password: string,
    iterations = 10000,
    keyLength = 64,
    digest = 'sha512',
  ): string {
    return password;
  }

  static generateSalt(length = 64): string {
    return '';
  }
}
