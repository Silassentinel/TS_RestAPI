/* eslint-disable no-unused-vars */
declare global {interface StringConstructor {
    /**
     * Checks if the string starts with the given string.
     * @param {string} str The string to check.
     * @returns {boolean} True if the string starts with the given string.
     * @example
     * ```
     * "hello world".startsWith("hello"); // true
     * ```
     */
    StartsWith(str: string): boolean;
    /**
     * Checks if the string ends with the given string.
     * @param {string} str The string to check.
     * @returns {boolean} True if the string ends with the given string.
     * @example
     * ```
     * "hello world".endsWith("world"); // true
     * ```
     */
    EndsWith(part: string): boolean;
    /**
     * Capitalizes first letter of the string.
     * @returns {string} The string with the first letter capitalized.
     * @example
     * ```
     * "hello world".capitalize(); // "Hello world"
     * ```
     */
    CapFirst():string;
    /**
     * Truncates the string of words by the given amount.
     * @param {number} amount The amount of words to truncate.
     * @returns {string} The truncated string.
     * @example
     * ```
     * "hello world".truncate(2); // " "
     * ``
     */
    TruncateWords(number: number) : string;
    /**
     * Checks if the string contains the given substring.
     * @param {string} str The substring to check.
     * @returns {boolean} True if the string contains the given substring.
     */
    Contains (val: string) : boolean;
    /**
     * Checks if the string is null or empty.
     * @returns {boolean} True if the string is null or empty.
     */
    IsNullOrEmpty(val: unknown) : boolean;
}}

String.IsNullOrEmpty = function (this:string, val: any): boolean {
  if (val === undefined || val === null || val.trim() === '') {
    return true;
  }
  return false;
};

export {};
