/**
 * Business Logics Layer Logger
 * creates logfiles for each error, warning, info and event
 */
export default class BLLLogger {
  // #region Props
  /**
   * Path to the verbose logfile
   * extracted from .env file
   */
  private _verboseLogPath = '';

  /**
   * Path to the error logfile
   * extracted from .env file
   */
  private _errorLogPath = '';

  /**
   * Path to the warning logfile
   * extracted from .env file
   */
  private _warningLogPath = '';

  /**
   * Path to the info logfile
   * extracted from .env file
   */
  private _infoLogPath = '';

  /**
   * Path to the event logfile
   * extracted from .env file
   */
  private _eventLogPath = '';

  /**
   * Timestamp when the logger was created
   */
  // TODO: implement
  private _logCreated = `${new Date().toLocaleDateString(
    'nl-Be',
  )} ${new Date().toLocaleTimeString('nl-Be')}`;

  // #endregion
  // #region Ctor
  // #endregion
  // #region Meths
  // #region Verbose
  /**
   * Method to write verbose messages to the logfile
   * @param {string} message - the message to write
   */
  // TODO: implement
  public static Verbose(name: string, linesToLogg: string[] | string): void {}

  // #region
  // #region Error
  /**
   * Method to write error messages to the logfile
   * @param {string} message - the message to write
   */
  // TODO: implement
  public static Error(name: string, linesToLog: string[] | string): void {}

  // #endregion
  // #region Warning
  /**
   * Method to write warning messages to the logfile
   * @param {string} message - the message to write
   */
  // TODO: implement
  public static Warning(name: string, linesToLog: string[] | string): void {}

  // #endregion
  // #region Info
  /**
   * Method to write info messages to the logfile
   * @param {string} message - the message to write
   */
  // TODO: implement
  public static Info(name: string, linesToLog: string[] | string): void {}

  // #endregion
  // #region Event
  /**
   * Method to write event messages to the logfile
   * @param {string} message - the message to write
   */
  // TODO: implement
  public static Event(name: string, linesToLog: string[] | string): void {}
  // #endregion
  // #endregion
}
