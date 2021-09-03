import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, it, afterEach } from 'mocha';
import fs from 'fs';
import { stderr } from 'process';
import FileWriter from '../../../../src/BLL/Utils/Tools/FileWriter';

chai.use(chaiAsPromised);

describe('FileWriter Tests', () => {
  describe('Sync', () => {
    const filePath = '/home/silas/code/TS_RestAPI/test/Logg/';
    const fileName = 'test.txt';
    const fileContent = 'Lorem Ipsum is simply dummy text of the printing';
    // after each run delete the file
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    afterEach(() => {
      try {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        fs.unlinkSync(`${filePath + fileName}`);
      } catch (e) {
        stderr.write(e as string);
      }
    });
    it('Should write a file sync to disk.', () => {
      FileWriter.WriteFileToDisk(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.existsSync(filePath + fileName)).to.be.true;
    });
    it('Should write a file to disk with a specified name.', () => {
      FileWriter.WriteFileToDisk(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.readdirSync(filePath)[0].includes(fileName)).to.be.true;
    });
    it('Should write a file to disk with the provided content.', () => {
      FileWriter.WriteFileToDisk(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.readFileSync(filePath + fileName, 'utf8')).to.equal(fileContent);
    });
    // it('Should write a file to disk with correct layout.', () => {

    // });
  });
  describe('Async', () => {
    const filePath = '/home/silas/code/TS_RestAPI/test/Logg';
    const fileName = 'Asynctest.txt';
    const fileContent = 'Lorem Ipsum is simply dummy text of the printing';
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    afterEach(async () => {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.unlink(`${filePath + fileName}`, (err) => {
        if (err) stderr.write(err.toString());
      });
    });
    it('should write Async a file to disk.', async () => {
      await FileWriter.WriteFileToDiskAsync(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.existsSync(filePath + fileName)).to.be.true;
    });
    it('Should write Async a file to disk with a specified name.', async () => {
      await FileWriter.WriteFileToDiskAsync(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.readdir(filePath, 'utf-8', (err, files) => {
        if (err) stderr.write(err.toString());
        files.forEach((file) => {
          expect(file.includes(fileName)).to.be.true;
        });
      });
    });
    it('Should write Async a file to disk with the provided content.', async () => {
      await FileWriter.WriteFileToDiskAsync(filePath + fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.readdir(filePath, 'utf-8', (err, files) => {
        if (err) stderr.write(err.toString());
        files.forEach((file) => {
          // eslint-disable-next-line security/detect-non-literal-fs-filename
          fs.readFile(file, 'utf-8', (error, data) => {
            if (error) stderr.write(error.toString());
            expect(data).to.equal(fileContent);
          });
        });
      });
    });
    // it('Should write Async a file to disk with correct layout.', async () => {

    // });
  });
});
