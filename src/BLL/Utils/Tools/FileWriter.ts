import fs from 'fs';
import { stdout, stderr } from 'process';
import FileWriterException from '../Exceptions/Tools/FileWriterException';

/**
 * @class FileWriter - Class to write files
*/
export default class FileWriter {
  // #region Helper Meths
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
    static WriteFileToDisk = (filePath: string, data: string[] |string): void => {
      if (filePath.length === 0) {
        throw new FileWriterException(
          'Empty File Path - ',
          'File path is empty',
          new Error('Cannot write to disk if no location is specified'),
        );
      }
      // extra checks on filepath to exclude any malicious code
      if (filePath.includes('..') || filePath.includes('/') || filePath.includes('\\')) {
        throw new FileWriterException(
          'Invalid File Path - ',
          'File path contains invalid characters',
          new Error('Invalid chars were in filePath'),
        );
      }
      if (data.length === 0) {
        throw new FileWriterException(
          'No data present - ',
          'if there is no data there is nothing to write',
          new Error('Cannot write to disk if no data is specified'),
        );
      }
      if (typeof data === 'string') {
        try {
          fs.writeFileSync(`${filePath}`, data, 'utf8'); // eslint-disable-line
        } catch (err:unknown) {
          stderr.write((err as Error).message as string);
          throw new FileWriterException('WriteToDiskError - ', 'There was an error writing to disk \n', err as Error);
        }
      }
      if (Array.isArray(data)) {
        if (this.IsArrayOnlyStrings(data)) {
          data.forEach((item) => {
            try {
              fs.writeFileSync(filePath, item, 'utf8'); // eslint-disable-line
            } catch (err:unknown) {
              stderr.write((err as Error).message as string);
              throw new FileWriterException(
                'WriteToDiskError - ',
                'There was an error writing to disk \n',
                err as Error,
              );
            }
          });
        }
      }
    }

    /**
     * Write a file Async to disk
     * @param {string} filePath - The path of the file to write
     * @param {string} data - The data to write
     */
      static WriteFileToDiskAsync = async (filePath: string, data: string[]| string): Promise<void> => {
        if (filePath.length === 0) {
          throw new FileWriterException(
            'Empty File Path - ',
            'File path is empty',
            new Error('Cannot write to disk if no location is specified'),
          );
        }
        // extra checks on filepath to exclude any malicious code
        if (filePath.includes('..') || filePath.includes('/') || filePath.includes('\\')) {
          throw new FileWriterException(
            'Invalid File Path - ',
            'File path contains invalid characters',
            new Error('Invalid chars were in filePath'),
          );
        }
        if (data.length === 0) {
          throw new FileWriterException(
            'No data present - ',
            'if there is no data there is nothing to write',
            new Error('Cannot write to disk if no data is specified'),
          );
        }
        if (typeof data === 'string') {
          fs.writeFile(filePath, data, 'utf8', (err: unknown) => { // eslint-disable-line
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
        if (Array.isArray(data)) {
          data.forEach((item) => {
            fs.writeFile(filePath, item, 'utf8', (err: unknown) => { // eslint-disable-line
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
        }
      }
      // #endregion
}
