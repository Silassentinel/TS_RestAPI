import fs from 'fs';
import { stdout, stderr } from 'process';
import FileWriterException from '../Exceptions/Tools/FileWriterException';
import FilePathChecker from './FilePathChecker';

/**
 * @class FileWriter - Class to write files
*/
export default class FileWriter {
  // #region Helper Meths
  /**
   * Method to verify Array content
   * @param {string[]} array - Array of strings to write
   * @returns {boolean} - True if the array contains only valid strings
   */
  private static IsArrayOnlyStrings(array: string[]): boolean {
    let stringFlag = false;
    array.forEach((item: string) => {
      if (typeof item === 'string') {
        stringFlag = true;
      }
    });
    return stringFlag;
  }

  // #endregion
  // #region Meths
  /**
 * Write a file with the given content
 * @param {string} filePath - The path of the file to write
 * @param {string} data - The data to write
*/
  static WriteFileToDisk = (filePath: string, name: string, data: string[] | string): void => {
    // check the filePath for malicious characters etc
    FilePathChecker.CheckFilePath(filePath);
    // check if any data is present
    if (data.length === 0) {
      throw new FileWriterException(
        'No data present - ',
        'if there is no data there is nothing to write',
        new Error('Cannot write to disk if no data is specified'),
      );
    }
    if (Array.isArray(data)) {
      if (this.IsArrayOnlyStrings(data)) {
        data.forEach((item) => {
          try {
            fs.writeFileSync(filePath, `${name} \n ${item}`, 'utf8'); // eslint-disable-line
          } catch (err: unknown) {
            stderr.write((err as Error).message as string);
            throw new FileWriterException(
              'WriteToDiskError - ',
              'There was an error writing to disk \n',
              err as Error,
            );
          }
        });
      }
    } else {
      try {
            fs.writeFileSync(`${filePath}`, `${name} \n ${data}`, 'utf8'); // eslint-disable-line
        return;
      } catch (err: unknown) {
        stderr.write((err as Error).message as string);
        throw new FileWriterException('WriteToDiskError - ', 'There was an error writing to disk \n', err as Error);
      }
    }
  }

  /**
   * Write a file Async to disk
   * @param {string} filePath - The path of the file to write
   * @param {string} data - The data to write
   */
  static WriteFileToDiskAsync = async (filePath: string, name: string, data: string[] | string): Promise<void> => {
    // check the filePath for malicious characters etc
    FilePathChecker.CheckFilePath(filePath);
    if (data.length === 0) {
      throw new FileWriterException(
        'No data present - ',
        'if there is no data there is nothing to write',
        new Error('Cannot write to disk if no data is specified'),
      );
    }
    if (Array.isArray(data)) {
      data.forEach((item) => {
        fs.writeFile(filePath, `${name} \n ${item}`, 'utf8', (err: unknown) => {// eslint-disable-line
          if (err) {
            stderr.write((err as Error).message as string);
            throw new FileWriterException(
              'WriteToDiskError - ',
              'There was an error writing to disk \n',
              err as Error,
            );
          } else stdout.write('File written to disk \n');
        });
      });
    } else {
      fs.writeFile(filePath, `${name} \n ${data}`, 'utf8', (err: unknown) => { // eslint-disable-line
        if (err) {
          stderr.write((err as Error).message as string);
          throw new FileWriterException(
            'WriteToDiskError - ',
            'There was an error writing to disk \n',
            err as Error,
          );
        } else stdout.write('File written to disk \n');
      });
    }
  };
  // #endregion
}
