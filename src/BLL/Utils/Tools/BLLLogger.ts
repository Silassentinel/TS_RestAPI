import 'dotenv/config';
import FileWriter from './FileWriter';
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
  private static _verboseLogPath = `${process.env.VERBOSELOGPATH}`;

  /**
   * Path to the error logfile
   * extracted from .env file
   */
  private static _errorLogPath = `${process.env.ERRORLOGPATH}`;

  /**
   * Path to the warning logfile
   * extracted from .env file
   */
  private static _warningLogPath = `${process.env.WARNINGLOGPATH}`;

  /**
   * Path to the info logfile
   * extracted from .env file
   */
  private static _infoLogPath = `${process.env.INFOLOGPATH}`;

  /**
   * Path to the event logfile
   * extracted from .env file
   */
  private static _eventLogPath = `${process.env.EVENTLOGPATH}`;

  /**
   * Timestamp when the logger was created
   */
  private static _logCreated = `${new Date().toLocaleDateString(
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
  public static Verbose(name: string, linesToLogg: string[] | string): void {
    FileWriter.WriteFileToDisk(this._verboseLogPath, linesToLogg);
  }

  /**
   * Method to write verbose messages to the logfile
   * @param {string} message - the message to write
   * @param {string} linesToLog - the lines to log
  */
  public static async VerboseAsync(name: string, linesToLogg: string[] | string): Promise<void> {}

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
