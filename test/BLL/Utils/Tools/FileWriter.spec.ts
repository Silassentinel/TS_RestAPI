import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, it } from 'mocha';
import fs from 'fs';
import FileWriter from '../../../../src/BLL/Utils/Tools/FileWriter';

chai.use(chaiAsPromised);

describe('FileWriter Tests', () => {
  describe('Sync', () => {
    const filePath = '/home/silas/code/TS_RestAPI/test/Logg/';
    const fileName = 'test.txt';
    const fileContent = 'test';
    it('Should write a file sync to disk.', () => {
      FileWriter.WriteFileToDisk(filePath, fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.existsSync(filePath + fileName)).to.be.true;
    });
    it('Should write a file to disk with a specified name.', () => {
      FileWriter.WriteFileToDisk(filePath, fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.f).to.be.true;
    });
    it('Should write a file to disk with the provided content.', () => {

    });
    it('Should write a file to disk with correct layout.', () => {

    });
  });
  describe('Async', () => {
    const filePath = './test/Logg';
    const fileName = 'Asynctest.txt';
    const fileContent = 'test';
    it('should write Async a file to disk.', () => {
      FileWriter.WriteFileToDiskAsync(filePath, fileName, fileContent);
    });
    it('Should write Async a file to disk with a specified name.', () => {

    });
    it('Should write Async a file to disk with the provided content.', () => {

    });
    it('Should write Async a file to disk with correct layout.', () => {

    });
  });
});
