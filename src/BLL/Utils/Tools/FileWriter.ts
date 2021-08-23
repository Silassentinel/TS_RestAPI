import fs from 'fs';
import { stdout } from 'process';
import FileWriterException from '../Exceptions/Tools/FileWriterException';
// import { stderr } from 'process';

export default class FileWriter {
    static WriteFileToDisk = (filePath: string, data: string[] |string): void => {
      if (filePath.length === 0) {
        throw new FileWriterException(
          'Empty File Path - ',
          'File path is empty',
          new Error('Cannot write to disk if no location is specified'),
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
          fs.writeFileSync(filePath, data, 'utf8');
        } catch (err:unknown) {
        // stderr.write(err);
          throw new FileWriterException('WriteToDiskError - ', 'There was an error writing to disk \n', err as Error);
        }
      } else {
        data.forEach((item) => {
          try {
            fs.writeFileSync(filePath, item, 'utf8');
          } catch (err:unknown) {
            // stderr.write(err);
            throw new FileWriterException('WriteToDiskError - ', 'There was an error writing to disk \n', err as Error);
          }
        });
      }
    }

      static WriteFileToDiskAsync = async (filePath: string, data: string[]| string): Promise<void> => {
        if (filePath.length === 0) {
          throw new FileWriterException(
            'Empty File Path - ',
            'File path is empty',
            new Error('Cannot write to disk if no location is specified'),
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
          fs.writeFile(filePath, data, 'utf8', (err: unknown) => {
            if (err) {
              throw new FileWriterException(
                'WriteToDiskError - ',
                'There was an error writing to disk \n',
                  err as Error,
              );
            } else stdout.write('File written to disk \n');
          });
        } else {
          data.forEach((item) => {
            fs.writeFile(filePath, item, 'utf8', (err: unknown) => {
              if (err) {
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
}
